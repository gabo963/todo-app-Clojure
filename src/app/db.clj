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
