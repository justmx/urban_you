class User < ActiveRecord::Base
  has_many :addresses
  has_many :bookings
  accepts_nested_attributes_for :addresses, reject_if: :all_blank, allow_destroy: true

  validates :email, :name, presence: true
end
