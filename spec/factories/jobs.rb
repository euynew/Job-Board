FactoryBot.define do
  factory :job do
    salary { 1 }
    name { "MyString" }
    description { "MyText" }
    post_date { "2023-12-19" }
    expire_date { "2023-12-19" }
    country { "MyString" }
    city { "MyString" }
    user { nil }
  end
end
