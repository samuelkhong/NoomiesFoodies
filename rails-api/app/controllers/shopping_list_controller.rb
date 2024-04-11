class ShoppingListController < ApplicationController
    # to do before action authentication logic for current_user

    def index
        @shoppinglist = ShoppingList.where(archived_at: nil)
        render json: @shoppinglist, status: :ok
    end
    
    def show
        @shoppinglist = ShoppingList.where("id = ? AND archived_at IS ?", params[:id], nil )
        if @shoppinglist.present?
            render json: @shoppinglist, status: :ok
        else
            render json: {"message": "Shopping List Does Not Exist"}, status: :unprocessable_entity
        end
    end

    
    def create
        @shoppinglist = ShoppingList.create(list_params)
        if @shoppinglist.save
            render json: @shoppinglist, status: :created
        else
            render json: {errors: @shoppinglist.errors}, status: :unprocessable_entity 
        end
    end
    
    def update
        @shoppinglist = ShoppingList.find(params[:id])
        if @shoppinglist.archived_at.nil? && @shoppinglist.update(list_params)
            render json: @shoppinglist, status: :created
        else
            render json: {errors: @shoppinglist.errors}, status: :unprocessable_entity  
        end
    end
    
    
    def destroy
        @shoppinglist = ShoppingList.find(params[:id])
        @shoppinglist.update(archived_at: Time.current.to_s)
        head :no_content
    end


    def list_params
        params.require(:shopping_list).permit(:name, :color, :archived_at, :user_id)
    end

end
