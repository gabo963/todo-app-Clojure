(ns app.model.todo
  (:require
    [com.wsscode.pathom.connect :as pc]
    [app.db]
    [app.model.queries :as q]))

(pc/defresolver todo-resolver [env {:todo/keys [id]}]
  {::pc/input  #{:todo/id}
   ::pc/output [:todo/id :todo/done :todo/text]}
  (q/id-query :todo/id id [:todo/id :todo/done :todo/text] app.db/conn))

(pc/defresolver all-todos-resolver [env {}]
  {::pc/output [{:all-todos [:todo/id]}]}
  {:all-todos (q/all-items-query :todo/id app.db/conn)})

(pc/defmutation todo-change-text [env {:todo/keys [id text]}]
  {::pc/params [:todo/id :todo/text]
   ::pc/output []}
  (q/assertion [:todo/id id] :todo/text text app.db/conn)
  {})

(pc/defmutation todo-change-done [env {:todo/keys [id done]}]
  {::pc/params [:todo/id :todo/done]
   ::pc/output []}
  (q/assertion [:todo/id id] :todo/done done app.db/conn)
  {})

(def resolvers [all-todos-resolver todo-resolver todo-change-text todo-change-done])
