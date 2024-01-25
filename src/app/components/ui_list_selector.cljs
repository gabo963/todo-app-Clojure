(ns app.components.ui-list-selector
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :refer [div ul li h1 h2 h3 h4 a button input label i s]]))

(defsc ListItem [this {:list/keys [id name] :as props}]
  {:query [:list/id :list/name]
   :ident :list/id}
  (li :.item
    (a {:href "#" :onClick #(js/alert "no funciona")}
      name))
  )

(def ui-list-item (comp/factory ListItem {:keyfn :list/id}))

(defsc ListList [this {:list-list/keys [list]}]
  {:query         [{:list-list/list (comp/get-query ListItem)}]
   :ident         (fn [] [:component/id ::list-list])
   :initial-state {:list-list/list []}}
  (div :.ui.segment
    (h3 :.ui.header "Todo Lists")
    (ul (map ui-list-item list))
    ))

(def ui-list-list (comp/factory ListList))
