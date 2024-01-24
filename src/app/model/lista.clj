(ns app.model.lista
  (:require
    [com.wsscode.pathom.connect :as pc]
    [app.model.todo]))

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

(defn- conj-in [m k v]
  (update-in m k conj v)
  )

(pc/defresolver all-listas-resolver [env {}]
  {::pc/output [{:all-listas [:lista/id]}]}
  {:all-listas (mapv (fn [i] {:lista/id i}) (keys @listas))})

(pc/defmutation todo-delete [env {lista-id :lista/id todo-id :todo/id}]
  {::pc/params [:lista/id :todo/id]
   ::pc/output []}
  (swap! listas assoc-in [lista-id :lista/todos] (clojure.set/difference (get-in @listas [lista-id :lista/todos]) #{todo-id}))
  (swap! app.model.todo/todos dissoc todo-id)
  {})

(pc/defmutation todo-add [env {:lista/keys [id]}]
  {::pc/params [:lista/id]
   ::pc/output [:todo/id]}
  (let [new-todo-id (random-uuid)]
    (swap! listas conj-in [id :lista/todos] new-todo-id)
    (swap! app.model.todo/todos assoc new-todo-id {:todo/id new-todo-id :todo/text "" :todo/done false})
    {:todo/id new-todo-id}))

  (def resolvers [lista-resolver all-listas-resolver todo-delete todo-add])
