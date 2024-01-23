(ns app.model.todo
  (:require [com.fulcrologic.fulcro.mutations :refer [defmutation]]
            [com.fulcrologic.fulcro.algorithms.normalized-state :as fns]
            [com.fulcrologic.fulcro.algorithms.merge :as merge]))

(defmutation todo-change-text [{:todo/keys [id text]}]
  (action [{:keys [state]}]
    (swap! state assoc-in [:todo/id id :todo/text] text)))

(defmutation todo-change-done [{:todo/keys [id done]}]
  (action [{:keys [state]}]
    (swap! state assoc-in [:todo/id id :todo/done] done)))

(defmutation todo-delete [{lista-id :lista/id todo-id :todo/id}]
  (action [{:keys [state]}]
    (fns/swap!-> state
      (merge/remove-ident* [:todo/id todo-id] [:lista/id lista-id :lista/todos])
      (fns/dissoc-in [:todo/id todo-id]))))

; TODO: mutation to add a todo.
#_(defmutation todo-add)
