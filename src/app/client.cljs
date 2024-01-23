(ns app.client
  (:require
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.data-fetch :as df]
    [com.fulcrologic.fulcro.dom :refer [div ul li h1 h2 h3 h4 button input label i s]]
    [com.fulcrologic.fulcro.networking.http-remote :as http]
    [app.components.ui-lista :as ui-lista-component]))

(defsc Root [this {:root/keys [lista]}]
  {:query         [{:root/lista (comp/get-query ui-lista-component/Lista)}]
   :initial-state {:root/lista {:id 1 :name "Gabriel"}}}
  (div :.ui.segment {}
    (h1 "Todo List")
    (if lista
      (ui-lista-component/ui-lista lista)
      (h1 "Loading..."))))

(defonce APP (app/fulcro-app {:remotes          {:remote (http/fulcro-http-remote {})}
                              :client-did-mount (fn [app] (js/console.log "Did mount"))}))

(defn ^:export init []
  (app/mount! APP Root "app"))
