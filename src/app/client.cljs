(ns app.client
  (:require
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :refer [div ul li h1 h2 h3 h4 button input label i s]]
    [app.ui-lista :as ui-lista-component]))

(defsc Root [this {:root/keys [lista]}]
  {:query         [{:root/lista (comp/get-query ui-lista-component/Lista)}]
   :initial-state {:root/lista {:id 1 :name "Gabriel"}}}
  (div :.ui.segment {}
    (h1 "Todo List")
    (if lista
      (ui-lista-component/ui-lista lista)
      (h1 "Loading..."))))

(defonce APP (app/fulcro-app))

(defn ^:export init []
  (app/mount! APP Root "app"))
