(ns app.client
  (:require
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.data-fetch :as df]
    [com.fulcrologic.fulcro.dom :refer [div ul li h1 h2 h3 h4 button input label i s]]
    [com.fulcrologic.fulcro.networking.http-remote :as http]
    [app.components.ui-list-selector :as ui-selector-component]
    [app.components.ui-lists-selection :as ui-selection-component]))

(defsc Root [this {:root/keys [list-picker]}]
  {:query         [{:root/list-picker (comp/get-query ui-selection-component/ListPicker)}]
   :initial-state {:root/list-picker {}}}
  (div :.ui.segment {}
    (h1 "Todo Lists")
    (if list-picker
      (ui-selection-component/ui-list-picker list-picker)
      (h1 "Loading..."))))

(defonce APP (app/fulcro-app {:remotes          {:remote (http/fulcro-http-remote {})}
                              :client-did-mount (fn [app]

                                                  (df/load! app :all-lists ui-selector-component/ListItem
                                                    {:target [:component/id ::ui-selector-component/list-list :list-list/list]}))}))

(defn ^:export init []
  (app/mount! APP Root "app"))
