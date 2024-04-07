class GroceryController < ApplicationController

    def create
        grocery = current_user.groceries.create(grocery_params)

        if grocery.valid?
            render json: grocery, status: :created
        else
            render json: { errors: grocery.errors.full_messages.to_sentence}, status: :unprocessable_entity
        end
    end

    protected

    def grocery_params
        params.permit(:name)
    end

end
