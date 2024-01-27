(ns app.components.ui-list-item
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :refer [div ul li h1 h2 h3 h4 a button input label i s]]
    [app.components.ui-todo-list :as ui-list-component]
    [app.model.list :as api])
  )

(defsc ListItem [this {:list/keys [id name] :as props}]
  {:query [:list/id :list/name]
   :ident :list/id}
  (li :.item
    (a {:href "#" :onClick #(comp/transact! this [{(api/select-list {:list/id id})
                                                   (comp/get-query ui-list-component/Lista)}])}
      name))
  )

(def ui-list-item (comp/factory ListItem {:keyfn :list/id}))
