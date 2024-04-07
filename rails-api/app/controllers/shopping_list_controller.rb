class ShoppingListController < ApplicationController
    # to do before action authentication logic for current_user

    def index
        @shoppinglist = ShoppingList.all
        render json: @shoppinglist, status: :ok
    end
    
    def show
        @shoppinglist = ShoppingList.find(params[:id])
        render json: @shoppinglist, status: :ok
    end

    
    def create
        @shoppinglist = ShoppingList.build(list_params)
        if @shoppinglist.save
            render json: @shoppinglist, status: :created
        else
            render json: {errors: @shoppinglist.errors}, status: :unprocessable_entity 
        end
    end
    
    def update
        @shoppinglist = ShoppingList.find(params[:id])
        if @shoppinglist.update(list_params)
            render json: @shoppinglist, status: :created
        else
            render json: {errors: @shoppinglist.errors}, status: :unprocessable_entity  
        end
    end
    
    
    def destroy
        @shoppinglist = ShoppingList.find(params[:id])
        @shoppinglist.destroy
        head :no_content
    end


    def list_params
        params.require(:shoppinglist).permit(:name, :color)
    end

end
