class AddLikesToTrips < ActiveRecord::Migration[5.1]
  def change
    add_column :trips, :likes, :integer, default: 0
  end
end
