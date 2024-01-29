(ns app.client
  (:require
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.data-fetch :as df]
    [com.fulcrologic.fulcro.dom :refer [div ul li h1 h2 h3 h4 button input label i s]]
    [com.fulcrologic.fulcro.networking.http-remote :as http]
    [app.components.ui-lists-picker :as ui-picker-component]
    [app.components.ui-list-item :as ui-list-item-component]))

(defsc Root [this {:root/keys [list-picker]}]
  {:query         [{:root/list-picker (comp/get-query ui-picker-component/ListPicker)}]
   :initial-state {:root/list-picker {}}}
  (div :.ui.segment {}
    (h1 "To-Do")
    (if list-picker
      (ui-picker-component/ui-list-picker list-picker)
      (h1 "Loading..."))))

(defn- initialLoading [app]
  (df/load! app :all-lists ui-list-item-component/ListItem
    {:target [:component/id :app.components.ui-list-list/list-list :list-list/list]})
  )

(def remoteMAp
  {:remote (http/fulcro-http-remote {})})

(defonce APP (app/fulcro-app {:remotes          remoteMAp
                              :client-did-mount initialLoading}))
(defn ^:export init []
  (app/mount! APP Root "app"))
