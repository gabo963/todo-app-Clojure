(ns app.model.list
  (:require
    [com.fulcrologic.fulcro.mutations :refer [defmutation]]
    [com.fulcrologic.fulcro.algorithms.normalized-state :as fns]
    [com.fulcrologic.fulcro.algorithms.merge :as merge]))

(defmutation todo-add [{list-id :list/id}]
  (ok-action [{:keys [state] :as env}]
    (let [new-todo-id (-> env :result :body (get-in [`todo-add :todo/id]))]
      (fns/swap!-> state
        (update-in [:list/id list-id :list/todos] conj [:todo/id new-todo-id])
        (assoc-in [:todo/id new-todo-id] {:todo/id new-todo-id :todo/text "" :todo/done false}))
      ))
  (remote [env] true))

(defmutation todo-delete [{list-id :list/id todo-id :todo/id}]
  (action [{:keys [state]}]
    (fns/swap!-> state
      (merge/remove-ident* [:todo/id todo-id] [:list/id list-id :list/todos])
      (fns/dissoc-in [:todo/id todo-id])))
  (remote [env] true))
