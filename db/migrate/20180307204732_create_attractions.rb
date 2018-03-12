class CreateAttractions < ActiveRecord::Migration[5.1]
  def change
    create_table :attractions do |t|
      t.string :name
      t.string :city
      t.string :category
      t.string :img_url
      t.string :price
      t.string :website


      t.timestamps
    end
  end
end
