(ns app.model.todo
  (:require
    [com.wsscode.pathom.connect :as pc]))

(def todos
  (atom {1 {:todo/id   1
            :todo/done false
            :todo/text "Buy Eggs"}
         2 {:todo/id   2
            :todo/done true
            :todo/text "Buy Onions"}
         3 {:todo/id   3
            :todo/done true
            :todo/text "Buy Ketchup"}}))

(pc/defresolver todo-resolver [env {:todo/keys [id]}]
  {::pc/input  #{:todo/id}
   ::pc/output [:todo/id :todo/done :todo/text]}
  (get @todos id))

(pc/defresolver all-todos-resolver [env {}]
  {::pc/output [{:all-todos [:todo/id]}]}
  {:all-todos (mapv (fn [i] {:todo/id i}) (keys @todos))})

(pc/defmutation todo-change-text [env {:todo/keys [id text]}]
  {::pc/params [:todo/id :todo/text]
   ::pc/output []}
  (swap! todos assoc-in [id :todo/text] text )
  {})

(pc/defmutation todo-change-done [env {:todo/keys [id done]}]
  {::pc/params [:todo/id :todo/done]
  ::pc/output []}
  (swap! todos assoc-in [id :todo/done] done)
  {})

(def resolvers [todo-resolver all-todos-resolver todo-change-text todo-change-done])
