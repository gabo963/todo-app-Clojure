(ns app.db
  (:require [datomic.client.api :as d]
            [app.schema]))

(def client (d/client {:server-type :datomic-local
                       :storage-dir :mem
                       :system "ci"}))


(d/create-database client {:db-name "todo-app"})

(def conn (d/connect client {:db-name "todo-app"}))

(def db (d/db conn))

(d/transact conn {:tx-data app.schema/todo-schema})
(d/transact conn {:tx-data app.schema/list-schema})

(def first-todos [{:db/id     "first todo"
                   :todo/id   (random-uuid)
                   :todo/text "Go to the dentist"
                   :todo/done false}
                  {:db/id     "second todo"
                   :todo/id   (random-uuid)
                   :todo/text "Buy Cookies"
                   :todo/done true}])

(d/transact conn {:tx-data first-todos})

(d/q '[:find (pull ?e [*])
       :in $
       :where
       [?e :todo/id]] (d/db conn))
