(ns app.components.ui-lists-picker
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :refer [div ul li h1 h2 h3 h4 a button input label i s]]
    [app.components.ui-list-list :as ui-list-list-component]
    [app.components.ui-todo-list :as ui-list-component]
    ))

(defsc ListPicker [this {:list-picker/keys [list selected-list]}]
  {:query         [{:list-picker/list (comp/get-query ui-list-list-component/ListList)}
                   {:list-picker/selected-list (comp/get-query ui-list-component/Lista)}]
   :ident         (fn [] [:component/id ::list-picker])
   :initial-state {:list-picker/list {}}}
  (div :.ui.two.column.container.grid
    (div :.column
      (ui-list-list-component/ui-list-list list))
    (div :.column
      (ui-list-component/ui-list selected-list))
    ))

(def ui-list-picker (comp/factory ListPicker))

