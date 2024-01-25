(ns app.db
  (:require [datomic.client.api :as d]
            [app.schema]
            [app.seed]))

;; Initial setup

(def client (d/client {:server-type :datomic-local
                       :storage-dir :mem
                       :system      "ci"}))


(d/create-database client {:db-name "todo-app"})

(def conn (d/connect client {:db-name "todo-app"}))

;; Schema transactions

(d/transact conn {:tx-data app.schema/todo-schema})
(d/transact conn {:tx-data app.schema/list-schema})

;; Seeding transactions

(d/transact conn {:tx-data app.seed/seed-todos})
(d/transact conn {:tx-data app.seed/seed-list})

(comment
  ;TODO: DELETE ONCE DONE TESTING

  (d/q '[:find (pull ?e [*])
         :in $
         :where
         [?e :todo/id]] (d/db conn))

  (d/q '[:find (pull ?e [*])
         :in $
         :where
         [?e :list/id]] (d/db conn))


  (d/q '[:find ?name ?text ?todo-id
         :in $
         :where
         [?e :list/name ?name]
         [?e :list/todos ?t]
         [?t :todo/text ?text]
         [?t :todo/id ?todo-id]
         [?t :todo/done true]] (d/db conn))

  )
