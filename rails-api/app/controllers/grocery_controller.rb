class GroceryController < ApplicationController

    def index
        groceries = Grocery.all 

        if groceries.length = 0
            render json: { message: 'No groceries available'}, status: :ok
        else
            render json: groceries, status: :ok
        end
    end

end
