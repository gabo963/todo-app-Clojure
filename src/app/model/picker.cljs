(ns app.model.picker
  (:require
    [com.fulcrologic.fulcro.mutations :refer [defmutation]]
    [app.components.ui-lists-selection :as ui-selection-component]))

(defmutation select-list [{:list/keys [id]}]
  (action [{:keys [state]}]
    (swap! state assoc-in [:component/id ::ui-selection-component/list-picker :list-picker/selected-list] [:list/id id])))
