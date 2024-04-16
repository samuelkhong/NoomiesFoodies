class FoodController < ApplicationController

    def create
        food = current_user.foods.create(food_params)

        if food.valid?
            render json: food, status: :created
        else
            render json: { errors: food.errors.full_messages.to_sentence}, status: :unprocessable_entity
        end
    end

    def update
        food = find_food(params[:id])

        if food && food.update(food_params)
            render json: food, status: :created
        elsif food = nil
            render json: { message: 'Food not found'}, status: :unprocessable_entity
        else
            render json: { errors: food.errors.full_messages.to_sentence}, status: :unprocessable_entity
        end
    end

    protected

    def food_params
        params.permit(:name, :description)
    end

    def find_food(id)
        food = current_user.foods.find_by(id: id)

        if food && food.archived_at = nil
            return food
        else
            return nil
        end
    end

end
