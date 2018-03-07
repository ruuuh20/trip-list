class CreateAttractions < ActiveRecord::Migration[5.1]
  def change
    create_table :attractions do |t|
      t.string :name
      t.string :img_url
      t.integer :price
      t.string :website
      t.string :location

      t.timestamps
    end
  end
end
