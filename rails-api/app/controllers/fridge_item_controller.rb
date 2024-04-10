class FridgeItemController < ApplicationController

    def create
        fridge = find_fridge(params[:id])
        new_fridge_item = fridge.fridge_items.create(fridge_item_params)

        if new_fridge_item.valid?
            render json: new_fridge_item, status: :created
        else
            render json: { message: new_fridge_item.errors.full_messages.to_sentence }, status: :unprocessable_entity
        end
        
    end

    protected

    def fridge_item_params
        params.permit(:grocery_id)
    end

    def find_fridge
        current_user.fridges.find_by(id: params[:id])
    end

end
