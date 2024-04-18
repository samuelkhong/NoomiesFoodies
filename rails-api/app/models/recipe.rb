class Recipe < ApplicationRecord
    has_many :recipe_items
    has_many :foods, through: :recipe_items
    belongs_to :user

    validates :name, presence: true 
    validates :description, presence: true
end
