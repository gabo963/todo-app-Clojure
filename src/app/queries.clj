(ns app.queries
  (:require [datomic.client.api :as d]))

;; Queries

(defn id-query [keyword id pattern conn]
  (-> (d/q '[:find (pull ?e pattern)
             :in $ [?keyword ?id] pattern
             :where
             [?e ?keyword ?id]] (d/db conn) [keyword id] pattern)
    (ffirst)))

(defn all-items-query [item-id-keyword conn]
  (-> (d/q '[:find (pull ?e pattern)
             :in $ ?item-keyword pattern
             :where
             [?e ?item-keyword]] (d/db conn) item-id-keyword [item-id-keyword])
    (flatten)
    (vec )
    ))

;; Assertions

(defn assertion [entity-id attribute value conn]
  (d/transact conn {:tx-data [[:db/add entity-id attribute value]]})
  )

(defn create-entity [payload conn]
  (d/transact conn {:tx-data [payload]})
)

;; Retractions

(defn entity-retraction [entity-id conn]
  (d/transact conn {:tx-data [[:db/retractEntity entity-id]]})
  )
