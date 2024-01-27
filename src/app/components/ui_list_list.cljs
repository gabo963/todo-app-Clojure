(ns app.components.ui-list-list
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :refer [div ul li h1 h2 h3 h4 a button input label i s]]
    [app.components.ui-list-item :as ui-list-item-component]))

(defsc ListList [this {:list-list/keys [list]}]
  {:query         [{:list-list/list (comp/get-query ui-list-item-component/ListItem)}]
   :ident         (fn [] [:component/id ::list-list])
   :initial-state {:list-list/list []}}
  (div :.ui.segment
    (h3 :.ui.header "To-do Lists")
    (ul (map ui-list-item-component/ui-list-item list))
    ))

(def ui-list-list (comp/factory ListList))
