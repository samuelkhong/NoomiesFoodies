class GroceryController < ApplicationController

    def update
        grocery = current_user.find(params[:id])
        # if grocery[:archived_at] = nil
        #     grocery.update(grocery_params)
        # else
        #     render json: { message: 'Grocery archived'}, status: :unprocessable_entity
        # end

        # if grocery.valid?
        #     render json: grocery, status: :created
        # else
        #     render json: { errors: grocery.errors.full_messages.to_sentence}, status: :unprocessable_entity
        # end
        grocery.update(grocery_params)

        if grocery[:archived_at] != nil
            render json: {message: 'Grocery Archived'}
        elsif grocery.invalid?
            render json: {errors: grocery.errors.full_messages.to_sentence}, status: :unprocessable_entity
        elsif 
            render json: grocery, status: :created
        end

    end

    def destroy
        grocery = current_user.find(params[:id])
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
