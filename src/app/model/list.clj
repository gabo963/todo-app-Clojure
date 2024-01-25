(ns app.model.list
  (:require
    [com.wsscode.pathom.connect :as pc]
    [app.model.todo]))

(def lists
  (atom {1 {:list/id    1
            :list/name  "Grocery"
            :list/todos #{1 2 3}}}))

(pc/defresolver list-resolver [env {:list/keys [id]}]
  {::pc/input  #{:list/id}
   ::pc/output [:list/id :list/name {:list/todos [:todo/id]}]}
  (let [list (-> @lists
                (get id)
                (update :list/todos (fn [ids] (mapv (fn [id] {:todo/id id}) ids))))]
    list))

(defn- conj-in [m k v]
  (update-in m k conj v)
  )

(pc/defresolver all-lists-resolver [env {}]
  {::pc/output [{:all-lists [:list/id]}]}
  {:all-lists (mapv (fn [i] {:list/id i}) (keys @lists))})

(pc/defmutation todo-delete [env {list-id :list/id todo-id :todo/id}]
  {::pc/params [:list/id :todo/id]
   ::pc/output []}
  (swap! lists assoc-in [list-id :list/todos] (clojure.set/difference (get-in @lists [list-id :list/todos]) #{todo-id}))
  (swap! app.model.todo/todos dissoc todo-id)
  {})

(pc/defmutation todo-add [env {:list/keys [id]}]
  {::pc/params [:list/id]
   ::pc/output [:todo/id]}
  (let [new-todo-id (random-uuid)]
    (swap! lists conj-in [id :list/todos] new-todo-id)
    (swap! app.model.todo/todos assoc new-todo-id {:todo/id new-todo-id :todo/text "" :todo/done false})
    {:todo/id new-todo-id}))

  (def resolvers [list-resolver all-lists-resolver todo-delete todo-add])
