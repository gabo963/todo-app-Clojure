(ns app.schema)

(def todo-schema [{:db/ident       :todo/id
                   :db/valueType   :db.type/uuid
                   :db/unique      :db.unique/identity
                   :db/cardinality :db.cardinality/one
                   :db/doc         "The id of the todo."}

                  {:db/ident       :todo/text
                   :db/valueType   :db.type/string
                   :db/cardinality :db.cardinality/one
                   :db/doc         "The text associated to the todo."}

                  {:db/ident       :todo/done
                   :db/valueType   :db.type/boolean
                   :db/cardinality :db.cardinality/one
                   :db/doc         "Flag if a todo has been completed or is pending completion"}])

(def list-schema [{:db/ident       :list/id
                   :db/valueType   :db.type/uuid
                   :db/unique      :db.unique/identity
                   :db/cardinality :db.cardinality/one
                   :db/doc         "The id of the list"}

                  {:db/ident       :list/name
                   :db/valueType   :db.type/string
                   :db/cardinality :db.cardinality/one
                   :db/doc         "The name associated to the list"}

                  {:db/ident       :list/todos
                   :db/valueType   :db.type/ref
                   :db/cardinality :db.cardinality/many
                   :db/isComponent true
                   :db/doc         "Mark if a todo has been completed or is pending"}])



