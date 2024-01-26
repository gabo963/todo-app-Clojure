(ns app.components.ui-lists-selection
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :refer [div ul li h1 h2 h3 h4 a button input label i s]]
    [app.components.ui-list :as ui-list-component]
    [app.model.list :as api]))

(defsc ListItem [this {:list/keys [id name] :as props}]
  {:query [:list/id :list/name]
   :ident :list/id}
  (li :.item
    (a {:href "#" :onClick #(comp/transact! this [{(api/select-list {:list/id id})
                                                   (comp/get-query ui-list-component/Lista)}])}
      name))
  )

(def ui-list-item (comp/factory ListItem {:keyfn :list/id}))

(defsc ListList [this {:list-list/keys [list]}]
  {:query         [{:list-list/list (comp/get-query ListItem)}]
   :ident         (fn [] [:component/id ::list-list])
   :initial-state {:list-list/list []}}
  (div :.ui.segment
    (h3 :.ui.header "To-do Lists")
    (ul (map ui-list-item list))
    ))

(def ui-list-list (comp/factory ListList))

(defsc ListPicker [this {:list-picker/keys [list selected-list]}]
  {:query         [{:list-picker/list (comp/get-query ListList)}
                   {:list-picker/selected-list (comp/get-query ui-list-component/Lista)}]
   :ident         (fn [] [:component/id ::list-picker])
   :initial-state {:list-picker/list {}}}
  (div :.ui.two.column.container.grid
    (div :.column
      (ui-list-list list))
    (div :.column
      (ui-list-component/ui-list selected-list))
    ))

(def ui-list-picker (comp/factory ListPicker))

