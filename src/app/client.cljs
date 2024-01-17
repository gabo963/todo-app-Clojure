(ns app.client
  (:require
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom :refer [div ul li h1 h2 h3 h4 button]]
    [com.fulcrologic.fulcro.algorithms.merge :as merge]
    [com.fulcrologic.fulcro.mutations :refer [defmutation]]
    [com.fulcrologic.fulcro.algorithms.data-targeting :as targeting]))

(defsc Car [this {:car/keys [id model] :as props}]
  {:query [:car/id :car/model]
   :ident :car/id
   :initial-state {:car/id :param/id
                   :car/model :param/model}}
  (div (h4 model)))

(def ui-car (comp/factory Car {:keyfn :car/id}))

(defmutation make-older [{:person/keys [id]}]
  (action [{:keys [state]}]
    (swap! state update-in [:person/id id :person/age] inc)))

(defsc Person [this {:person/keys [id name age cars] :as props}]
  {:query [:person/id :person/name :person/age {:person/cars (comp/get-query Car)}]
   :ident :person/id
   :initial-state {:person/id :param/id
                   :person/name :param/name
                   :person/age 0
                   :person/cars [{:id 20 :model "Forester"}
                                 {:id 21 :model "Leaf"}
                                 {:id 22 :model "Pilot"}]}}
  (div :.ui.segment {}
    (h2 "Name: " name)
    (h2 "Age: " age)
    (button :.ui.button {:onClick
      #(comp/transact! this [(make-older {:person/id id})] {:refresh [:person-list/people]})} "Make Older")
    (h2 "id: " id)
    (h2 "Cars:")
    (ul (map ui-car cars)))
  )

(def ui-person (comp/factory Person {:keyfn :person/id}))

(defsc PersonList [this { :person-list/keys [people]}]
  {:query [{:person-list/people (comp/get-query Person)}]
   :ident (fn [] [:component/id ::person-list])
   :initial-state {:person-list/people [{:id 1 :name "Daniel"} {:id 2 :name "Nicolas"}]}}
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


