(ns app.components.ui-lista
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :refer [div ul li h1 h2 h3 h4 button input label i s]]
    [app.mutations :as api]
    [app.components.ui-todo :as ui-todo-component]))

(defn- delete-todo! [this list-id todo-id]
  (comp/transact! this [(api/todo-delete {:lista/id list-id :todo/id todo-id})]))

(defn- ui-todo [this list-id todo]
  (ui-todo-component/ui-todo
    (comp/computed todo {:onDelete (partial delete-todo! this list-id)})))

(defsc Lista [this {:lista/keys [id name todos] :as props}]
  {:query         [:lista/id :lista/name {:lista/todos (comp/get-query ui-todo-component/Todo)}]
   :ident         (fn [] [:lista/id (:lista/id props)])
   :initial-state {:lista/id    :param/id
                   :lista/name  :param/name
                   :lista/todos [{:id 1}
                                 {:id 2}
                                 {:id 3}]}}
  (div :.ui.segment
    (h2 name "'s Todos")
    (h2 "Todos:")
    (ul
      (map #(ui-todo this id %) todos))
    (button :.ui.button {} "Add item")
    )
  )

(def ui-lista (comp/factory Lista {:keyfn :lista/id}))
