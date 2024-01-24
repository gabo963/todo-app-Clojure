(ns app.model.lista
  (:require
    [com.fulcrologic.fulcro.mutations :refer [defmutation]]
    [com.fulcrologic.fulcro.algorithms.normalized-state :as fns]
    [com.fulcrologic.fulcro.algorithms.merge :as merge]))

(defmutation todo-add [{lista-id :lista/id}]
  (ok-action [{:keys [state] :as env}]
    (let [new-todo-id (-> env :result :body (get-in [`todo-add :todo/id]))]
      (fns/swap!-> state
        (update-in [:lista/id lista-id :lista/todos] conj [:todo/id new-todo-id])
        (assoc-in [:todo/id new-todo-id] {:todo/id new-todo-id :todo/text "" :todo/done false} ))
      ))
  (remote [env] true))

; TODO: mutation to add a list.
#_(defmutation list-add)

; TODO: Remove todos associated to this list.
#_(defmutation lista-delete [{lista-id :lista/id}]
  (action [{:keys [state]}]
    (fns/dissoc-in state [:lista/id lista-id])
    ))

(defmutation todo-delete [{lista-id :lista/id todo-id :todo/id}]
  (action [{:keys [state]}]
    (fns/swap!-> state
      (merge/remove-ident* [:todo/id todo-id] [:lista/id lista-id :lista/todos])
      (fns/dissoc-in [:todo/id todo-id])))
  (remote [env] true))
