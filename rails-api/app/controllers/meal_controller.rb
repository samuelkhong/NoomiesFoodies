class MealController < ApplicationController

  def index
    meals = current_user.meals.where(archived_at: nil).includes(:foods)
    if meals.empty?
        render json: { message: 'You have no meals'}, status: :ok
    else
        render json: meals, include: {foods: { only: [:id, :name, :description]}}, status: :ok
    end
  end
  
end
