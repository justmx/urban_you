class BookingsController < ApplicationController

  before_action :ensure_user, only: [:create]

  def create
    booking = @user.bookings.create process_booking_detail_params
    booking.address = user_address
    booking.save

    render json: booking
  end

  def index

  end

  private

  def ensure_user
    @user = User.find_or_initialize_by(email: user_params[:email])
    @user.name ||= user_params[:name]
    @user.save
    @user
  end

  def user_address
    @address ||= @user.addresses
                     .find_or_create_by(
                       address1: address_params[:address1],
                       address2: address_params[:address2],
                       postcode: address_params[:postcode]
                     )
  end
    # Use callbacks to share common setup or constraints between actions.

    # Never trust parameters from the scary internet, only allow the white list through.

  def process_booking_detail_params
    booking_detail_params.merge(booking_extras_params)
  end

  def booking_extras_params
    Booking::EXTRA_MAP.each_with_object({}) do |kv, hash|
      hash[kv[0]] = (params[:booking][:booking_detail][:extras] || []).include?(kv[1])
    end
  end

  def booking_params
    params.require(:booking)
          .permit(
            user_attributes: [:email, :name],
            address_attributes: [:address1, :address2, :postcode],
            booking_detail: [
              :service_type , :time_range, :date, :bath_no, :bed_no, :extras, :total_hours, :total_price
            ]
    )
  end

  def booking_detail_params
    booking_params[:booking_detail].except(:extras)
  end

  def user_params
    booking_params[:user_attributes]
  end

  def address_params
    booking_params[:address_attributes]
  end
end
