(ns app.client
  (:require
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom :refer [div ul li h1 h2 h3 h4 button input label i s]]
    [com.fulcrologic.fulcro.algorithms.merge :as merge]
    [com.fulcrologic.fulcro.dom.events :as evt]
    [com.fulcrologic.fulcro.mutations :refer [defmutation]]
    [com.fulcrologic.fulcro.algorithms.data-targeting :as targeting]))

(defmutation todo-text-changed [{:todo/keys [id text]}]
  (action [{:keys [state]}]
    (swap! state assoc-in [:todo/id id :todo/text] text)
  )
)

(defmutation todo-done-changed [{:todo/keys [id done]}]
  (action [{:keys [state]}]
    (swap! state assoc-in [:todo/id id :todo/done] done)
  )
)

(defmutation todo-deleted [{:todo/keys [id]}]
  (action [{:keys [state]}]
    (swap! state dissoc [:todo/id] id)
  )
)

(defsc Todo [this {:todo/keys [id done text] :as props}]
  {:query [:todo/id :todo/done :todo/text]
   :ident :todo/id
   :initial-state {:todo/id :param/id
                   :todo/done false
                   :todo/text ""}}
  (div :.ui.grid
    (div :.column
      (input {:type "checkbox" :name id :checked done
      :onChange #(comp/transact! this [(todo-done-changed {:todo/id id :todo/done (not done)})])}
      )
      (label "")
    )
    (if done
      (div :.ui.disabled.input.ten.wide.column
        (input :.w-full {:type "text" :value text :style {:text-decoration "line-through"}})
        )
      (div :.ui.input.ten.wide.column
        (input :.w-full {:type "text" :value text :placeholder "Write Something"
        :onChange #(comp/transact! this [(todo-text-changed {:todo/id id :todo/text (evt/target-value %)})])})
        )
      )
    (div :.two.wide.column.fluid
      (button :.ui.icon.button {} ""
        (i :.x.icon)
        )
      )
    ))

(def ui-todo (comp/factory Todo {:keyfn :todo/id}))

(defmutation make-older [{:person/keys [id]}]
  (action [{:keys [state]}]
    (swap! state update-in [:person/id id :person/age] inc)))

(defsc Person [this {:person/keys [id name age todos] :as props}]
  {:query [:person/id :person/name :person/age {:person/todos (comp/get-query Todo)}]
   :ident :person/id
   :initial-state {:person/id :param/id
                   :person/name :param/name
                   :person/age 0
                   :person/todos [{:id 1}
                                 {:id 2 }
                                 {:id 3}]}}
  (div :.ui.segment {}
    (h2 "Name: " name)
    (h2 "Age: " age)
    (button :.ui.button {:onClick
      #(comp/transact! this [(make-older {:person/id id})] {:refresh [:person-list/people]})} "Make Older")
    (h2 "id: " id)
    (h2 "Todos:")
    (ul (map ui-todo todos)))
  )

(def ui-person (comp/factory Person {:keyfn :person/id}))

(defsc PersonList [this { :person-list/keys [people]}]
  {:query [{:person-list/people (comp/get-query Person)}]
   :ident (fn [] [:component/id ::person-list])
   :initial-state {:person-list/people [{:id 1 :name "Daniel"}]}}
  (div
    (let [cnt (reduce (fn [c {:person/keys [age]}]
                        (if (> age 30) (inc c) c)) 0 people)]
    (h2 "People Over 30: " cnt))
    (ul (map ui-person people))
  ))

(def ui-person-list (comp/factory PersonList))

(defsc Root [this {:root/keys [list]}]
  {:query [{:root/list (comp/get-query PersonList)}]
   :initial-state {:root/list {}}}
  (div :.ui.segment{}
    (if list
      (div (h1 "People")
           (ui-person-list list))
      (h3 "Loading..."))))

(defonce APP (app/fulcro-app))

(defn ^:export init []
  (app/mount! APP Root "app"))

(comment

  (comp/get-query PersonList)
  (comp/get-initial-state Sample)
  (reset! (::app/state-atom APP) {})

  (app/current-state APP)

  (app/schedule-render! APP)


  )


