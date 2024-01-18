(ns app.client
  (:require
    [com.fulcrologic.fulcro.algorithms.normalized-state :as fns]
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom :refer [div ul li h1 h2 h3 h4 button input label i s]]
    [com.fulcrologic.fulcro.algorithms.merge :as merge]
    [com.fulcrologic.fulcro.dom.events :as evt]
    [com.fulcrologic.fulcro.mutations :refer [defmutation]]
    [com.fulcrologic.fulcro.algorithms.data-targeting :as targeting]))

(defmutation todo-change-text [{:todo/keys [id text]}]
  (action [{:keys [state]}]
    (swap! state assoc-in [:todo/id id :todo/text] text)
  )
)

(defmutation todo-change-done [{:todo/keys [id done]}]
  (action [{:keys [state]}]
    (swap! state assoc-in [:todo/id id :todo/done] done)
  )
)

(defsc Todo [this {:todo/keys [id done text] :as props} {:keys [onDelete]}]
  {:query [:todo/id :todo/done :todo/text]
   :ident (fn [] [:todo/id (:todo/id props)])
   :initial-state {:todo/id :param/id
                   :todo/done false
                   :todo/text ""}}
  (div :.ui.grid
    (div :.column
      (input {:type "checkbox" :name id :checked done
      :onChange #(comp/transact! this [(todo-change-done {:todo/id id :todo/done (not done)})])}
      )
      (label "")
    )
    (if done
      (div :.ui.disabled.input.ten.wide.column
        (input :.w-full {:type "text" :value text :style {:text-decoration "line-through"}})
        )
      (div :.ui.input.ten.wide.column
        (input :.w-full {:type "text" :value text :placeholder "Write Something"
        :onChange #(comp/transact! this [(todo-change-text {:todo/id id :todo/text (evt/target-value %)})])})
        )
      )
    (div :.two.wide.column.fluid
      (button :.ui.icon.button {
        :onClick #(onDelete id)} ""
        (i :.x.icon)
        )
      )
    ))

(def ui-todo (comp/factory Todo {:keyfn :todo/id}))

(defmutation todo-delete [{lista-id :lista/id todo-id :todo/id}]
  (action [{:keys [state]}]
    (fns/swap!-> state
      (merge/remove-ident* [:todo/id todo-id] [:lista/id lista-id :lista/todos])
      (fns/dissoc-in [:todo/id todo-id])
    )
  )
)

(defsc Lista [this {:lista/keys [id name  todos] :as props}]
  {:query [:lista/id :lista/name {:lista/todos (comp/get-query Todo)}]
   :ident (fn [] [:lista/id (:lista/id props)])
   :initial-state {:lista/id :param/id
                   :lista/name :param/name
                   :lista/todos [{:id 1}
                                 {:id 2 }
                                 {:id 3}]}}
  (let [delete-todo (fn [todo-id] (comp/transact! this [(todo-delete {:lista/id id :todo/id todo-id})]))]
    (div :.ui.segment {}
    (h2 name "'s Todos")
    (h2 "Todos:")
    (ul (map #(ui-todo (comp/computed % {:onDelete delete-todo})) todos))
    (button :.ui.button {} "Add item")
    ))
)

(def ui-lista (comp/factory Lista {:keyfn :lista/id}))

(defsc Root [this {:root/keys [lista]}]
  {:query [{:root/lista (comp/get-query Lista)}]
   :initial-state {:root/lista {:id 1 :name "Gabriel"}}}
  (div :.ui.segment{}
  (h1 "Todo List")
    (if lista
      (div
           (ui-lista lista))
      (h3 "Loading..."))))

(defonce APP (app/fulcro-app))

(defn ^:export init []
  (app/mount! APP Root "app"))

(comment

  (comp/get-query PersonList)
  (comp/get-initial-state Root)
  (reset! (::app/state-atom APP) {})

  (app/current-state APP)

  (app/schedule-render! APP)

  )


