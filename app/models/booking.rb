class Booking < ActiveRecord::Base
  belongs_to :address
  belongs_to :user
  accepts_nested_attributes_for :user, reject_if: :all_blank, allow_destroy: true

  before_validation :calculate_total_hours, :calculate_total_price

  REGULAR_HOUR_RATE = 32.0
  SPRING_HOUR_RATE = 35.0

  EXTRA_MAP = {
    inside_windows: "Inside Windows",
    outside_windows: "Outside Windows",
    fridge: "Fridge",
    balcony: "Bolcony"
  }.freeze

  private

  def spring_service?
    service_type == 'sc'
  end

  def hour_rate
    spring_service? ? SPRING_HOUR_RATE : REGULAR_HOUR_RATE
  end

  def calculate_hour
    ### calculated from beds/baths
    (bed_no + bath_no + extras_count) * 0.5
  end

  def extras_count
    EXTRA_MAP.keys.count{ |k| self.public_send(k) }
  end

  def calculate_total_price
    self.total_price = hour_rate * total_hours
  end

  def calculate_total_hours
    self.total_hours = calculate_hour < 1 ? 1 : calculate_hour
  end
end
