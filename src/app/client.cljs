(ns app.client
  (:require
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.data-fetch :as df]
    [com.fulcrologic.fulcro.dom :refer [div ul li h1 h2 h3 h4 button input label i s]]
    [com.fulcrologic.fulcro.networking.http-remote :as http]
    [app.components.ui-list :as ui-list-component]))

(defsc Root [this {:root/keys [list]}]
  {:query         [{:root/list (comp/get-query ui-list-component/Lista)}]
   :initial-state {:root/list {}}}
  (div :.ui.segment {}
    (h1 "Todo List")
    (if list
      (ui-list-component/ui-list list)
      (h1 "Loading..."))))

(defonce APP (app/fulcro-app {:remotes          {:remote (http/fulcro-http-remote {})}
                              :client-did-mount (fn [app]
                                                  (df/load! app [:list/id #uuid"1bd2ab8b-73d2-4c6f-9966-0671b16a372e"] ui-list-component/Lista
                                                    {:target [:root/list]}))}))

(defn ^:export init []
  (app/mount! APP Root "app"))
