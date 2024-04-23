class CreateRecipe < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :image
      t.string :category
      t.integer :prep_time
      t.integer :cook_time
      t.integer :yields
      t.string :instructions
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
