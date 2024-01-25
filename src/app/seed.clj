(ns app.seed)

(def seed-todos [{:todo/id   #uuid"47e79194-f3bb-4243-ad50-6095626fb210"
                  :todo/text "Buy a PS4"
                  :todo/done false}
                 {:todo/id   #uuid"3605d411-52a3-457a-9d20-c92aba7d6917"
                  :todo/text "Buy a nintendo switch"
                  :todo/done true}
                 {:todo/id   #uuid"0899cc7d-872e-45ec-80bc-54e9b1a7504f"
                  :todo/text "Buy onions"
                  :todo/done false}
                 {:todo/id   #uuid"7ea5387e-92be-4434-838e-c477cb874207"
                  :todo/text "Asado"
                  :todo/done false}
                 {:todo/id   #uuid"e3da8f51-d80c-4f3b-a383-2f3ed7acba3d"
                  :todo/text "Pesto Pasta"
                  :todo/done true}])

(def seed-list [{:list/id    #uuid"1bd2ab8b-73d2-4c6f-9966-0671b16a372e"
                 :list/name  "Shopping"
                 :list/todos [{:todo/id #uuid"47e79194-f3bb-4243-ad50-6095626fb210"}
                              {:todo/id #uuid"3605d411-52a3-457a-9d20-c92aba7d6917"}]}
                {:list/id    #uuid"ee4692b7-2f3b-4637-b61d-f460cc665d9f"
                 :list/name  "Groceries"
                 :list/todos [{:todo/id #uuid"0899cc7d-872e-45ec-80bc-54e9b1a7504f"}]}
                {:list/id    #uuid"9a4203bc-8941-416f-9369-d185381b894f"
                 :list/name  "Recipes"
                 :list/todos [{:todo/id #uuid"7ea5387e-92be-4434-838e-c477cb874207"}
                              {:todo/id #uuid"e3da8f51-d80c-4f3b-a383-2f3ed7acba3d"}]}])
