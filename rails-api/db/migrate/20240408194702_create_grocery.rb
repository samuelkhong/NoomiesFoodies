class CreateGrocery < ActiveRecord::Migration[7.0]
  def change
    create_table :groceries do |t|
      t.string :name
      t.integer :user_id
      t.string :archived_at
      t.boolean :universal

      t.timestamps
    end
  end
end
