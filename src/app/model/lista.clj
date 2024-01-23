(ns app.model.lista
  (:require
    [com.wsscode.pathom.connect :as pc]))

(def listas
  (atom {1 {:lista/id    1
            :lista/name  "Grocery"
            :lista/todos #{1 2 3}}}))

(pc/defresolver lista-resolver [env {:lista/keys [id]}]
  {::pc/input  #{:lista/id}
   ::pc/output [:lista/id :lista/name {:lista/todos [:todo/id]}]}
  (let [lista (-> @listas
                (get id)
                (update :lista/todos (fn [ids] (mapv (fn [id] {:todo/id id}) ids))))]
    lista))

(pc/defresolver all-listas-resolver [env {}]
  {::pc/output [{:all-listas [:lista/id]}]}
  {:all-listas (mapv (fn [i] {:lista/id i}) (keys @listas))}
  )

(def resolvers [lista-resolver all-listas-resolver])
