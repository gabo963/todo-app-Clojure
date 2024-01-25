(ns app.seed)

(def seed-todos [{:todo/id   #uuid"47e79194-f3bb-4243-ad50-6095626fb210"
                  :todo/text "Buy a PS4"
                  :todo/done false}
                 {:todo/id   #uuid"3605d411-52a3-457a-9d20-c92aba7d6917"
                  :todo/text "Buy a nintendo switch"
                  :todo/done false}
                 {:todo/id   #uuid"0899cc7d-872e-45ec-80bc-54e9b1a7504f"
                  :todo/text "Buy onions"
                  :todo/done true}])

(def seed-list [{:list/id    #uuid"1bd2ab8b-73d2-4c6f-9966-0671b16a372e"
                 :list/name  "Shopping"
                 :list/todos [{:todo/id #uuid"47e79194-f3bb-4243-ad50-6095626fb210"}
                              {:todo/id #uuid"3605d411-52a3-457a-9d20-c92aba7d6917"}
                              {:todo/id #uuid"0899cc7d-872e-45ec-80bc-54e9b1a7504f"}]}])
