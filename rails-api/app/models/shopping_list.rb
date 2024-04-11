class ShoppingList < ApplicationRecord
  
  validates :name, presence: true
  validates :color, presence: true
  belongs_to :user

end
