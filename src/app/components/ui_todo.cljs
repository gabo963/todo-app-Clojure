(ns app.components.ui-todo
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom :refer [div ul li h1 h2 h3 h4 button input label i s]]
    [com.fulcrologic.fulcro.dom.events :as evt]
    [app.mutations :as api]))

(defn- ui-todo-checkbox [this id done]
  (div
    (input {:type     "checkbox" :name id :checked done
            :onChange #(comp/transact! this
                         [(api/todo-change-done {:todo/id id :todo/done (not done)})])}
      )
    (label "")))

(defn- ui-todo-input [this id text done]
  (if done
    (div :.ui.disabled.input
      (input :.w-full {:type "text" :value text :style {:text-decoration "line-through"}}))
    (div :.ui.input
      (input :.w-full {:type     "text" :value text :placeholder "Write Something"
                       :onChange #(comp/transact! this
                                    [(api/todo-change-text {:todo/id id :todo/text (evt/target-value %)})])}))))
(defn- ui-todo-delete-button [onDelete id]
  (div :.fluid
    (button :.ui.icon.button {
                              :onClick #(onDelete id)} ""
      (i :.x.icon))))

(defsc Todo [this {:todo/keys [id done text] :as props} {:keys [onDelete]}]
  {:query         [:todo/id :todo/done :todo/text]
   :ident         (fn [] [:todo/id (:todo/id props)])
   :initial-state {:todo/id   :param/id
                   :todo/done false
                   :todo/text ""}}
  (div :.ui.grid
    (div :.column
      (ui-todo-checkbox this id done))
    (div :.ten.wide.column
      (ui-todo-input this id text done))
    (div :.two.wide.column
      (ui-todo-delete-button onDelete id))
    ))

(def ui-todo (comp/factory Todo {:keyfn :todo/id}))
