(ns app.model.lista
  (:require
    [com.fulcrologic.fulcro.mutations :refer [defmutation]]
    [com.fulcrologic.fulcro.algorithms.normalized-state :as fns]))

; TODO: mutation to add a list.
#_(defmutation todo-add)

(defmutation lista-delete [{lista-id :lista/id}]
  (action [{:keys [state]}]
    (fns/dissoc-in state [:lista/id lista-id])
    ))
