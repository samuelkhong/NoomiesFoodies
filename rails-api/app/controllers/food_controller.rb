class FoodController < ApplicationController

    def create
        food = current_user.foods.create(food_params)

        if food.valid?
            render json: food, status: :created
        else
            render json: { errors: food.errors.full_messages.to_sentence}, status: :unprocessable_entity
        end
    end

    protected

    def food_params
        params.permit(:name, :description)
    end

end
