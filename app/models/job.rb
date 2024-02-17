class Job < ApplicationRecord
  belongs_to :user

  attr_accessor :title, :description, :company, :url, :user_id


end
