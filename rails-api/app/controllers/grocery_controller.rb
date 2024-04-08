class GroceryController < ApplicationController

    def update
        grocery = current_user.groceries.find(params[:id])

        if grocery.archived_at.present?
            render json: { message: 'Grocery Archived'}, status: :unprocessable_entity
        elsif grocery.update(grocery_params)
            render json: grocery, status: :created
        else
            render json: { errors: grocery.errors.full_messages.to_sentence}, status: :unprocessable_entity
        end

    end

    def destroy
        grocery = current_user.groceries.find(params[:id])
        if grocery
            grocery.update(archived_at: Time.current.to_sentence)
            head :no_content
        else
            render json: { message: 'Some error message'}, status: :unprocessable_entity
        end
    end

    protected

    def grocery_params
        params.permit(:name)
    end
end
