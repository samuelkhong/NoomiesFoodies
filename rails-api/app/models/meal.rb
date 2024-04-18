class Meal < ApplicationRecord
  belongs_to :meal_item
  has_many :recipes, through: :meal_item

end