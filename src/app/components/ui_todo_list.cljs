(ns app.components.ui-todo-list
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :refer [div ul li h1 h2 h3 h4 button input label i s]]
    [app.model.list :as api]
    [app.components.ui-todo :as ui-todo-component]))

(defn- delete-todo! [this list-id todo-id]
  (comp/transact! this [(api/todo-delete {:list/id list-id :todo/id todo-id})]))

(defn- ui-todo [this list-id todo]
  (ui-todo-component/ui-todo
    (comp/computed todo {:onDelete (partial delete-todo! this list-id)})))

(defsc Lista [this {:list/keys [id name todos] :as props}]
  {:query         [:list/id :list/name {:list/todos (comp/get-query ui-todo-component/Todo)}]
   :ident         (fn [] [:list/id (:list/id props)])}
  (div :.ui.segment
    (h2 name " To-dos:")
    (ul
      (map #(ui-todo this id %) todos))
    (when todos
      (button :.ui.button {:onClick #(comp/transact! this [(api/todo-add {:list/id id})])} "Add item"))
    )
  )

(def ui-list (comp/factory Lista {:keyfn :list/id}))
