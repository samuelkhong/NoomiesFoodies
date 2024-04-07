class GroceryController < ApplicationController

    def index
        groceries = Grocery.where(user_id: current_user.id).or(Grocery.where(universal: true))
        render json: groceries, status: :ok
    end

end
