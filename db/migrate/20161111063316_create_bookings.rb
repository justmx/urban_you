class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :user_id
      t.integer :address_id
      t.date :date
      t.datetime :start_time
      t.datetime :end_time
      t.string :time_range
      t.integer :bed_no
      t.integer :bath_no
      t.float :total_hours
      t.float :total_price
      t.string :service_type
      t.boolean :inside_windows
      t.boolean :outside_windows
      t.boolean :fridge
      t.boolean :balcony

      t.timestamps null: false
    end
  end
end
