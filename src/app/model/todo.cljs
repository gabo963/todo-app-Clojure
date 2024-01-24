(ns app.model.todo
  (:require [com.fulcrologic.fulcro.mutations :refer [defmutation]]))

(defmutation todo-change-text [{:todo/keys [id text]}]
  (action [{:keys [state]}]
    (swap! state assoc-in [:todo/id id :todo/text] text))
  (remote [env] true))

(defmutation todo-change-done [{:todo/keys [id done]}]
  (action [{:keys [state]}]
    (swap! state assoc-in [:todo/id id :todo/done] done))
  (remote [env] true))
