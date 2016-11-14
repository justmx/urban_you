class Address < ActiveRecord::Base
  belongs_to :user
  belongs_to :booking

  validates :user_id, presence: true
end
