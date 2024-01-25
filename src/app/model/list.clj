(ns app.model.list
  (:require
    [com.wsscode.pathom.connect :as pc]
    [app.model.todo]
    [app.db]
    [app.model.queries :as q]))

(pc/defresolver list-resolver [env {:list/keys [id]}]
  {::pc/input  #{:list/id}
   ::pc/output [:list/id :list/name {:list/todos [:todo/id]}]}
  (q/id-query :list/id id [:list/id :list/name {:list/todos [:todo/id]}] app.db/conn))

(pc/defresolver all-lists-resolver [env {}]
  {::pc/output [{:all-lists [:list/id]}]}
  {:all-lists (q/all-items-query :list/id app.db/conn)})

(pc/defmutation todo-delete [env {todo-id :todo/id}]
  {::pc/params [:todo/id]
   ::pc/output []}
  (q/entity-retraction [:todo/id todo-id] app.db/conn)
  {})

(pc/defmutation todo-add [env {:list/keys [id]}]
  {::pc/params [:list/id]
   ::pc/output [:todo/id]}
  (let [new-todo-id (random-uuid)]
    (q/create-entity {:todo/id new-todo-id :todo/text "" :todo/done false} app.db/conn)
    (q/assertion [:list/id id] :list/todos [:todo/id new-todo-id] app.db/conn)
    {:todo/id new-todo-id}))

(def resolvers [list-resolver all-lists-resolver todo-delete todo-add])
