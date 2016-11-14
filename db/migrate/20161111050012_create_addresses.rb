class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.integer :user_id
      t.string :address1
      t.string :address2
      t.integer :postcode

      t.timestamps null: false
    end
  end
end
