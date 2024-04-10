class FridgeItemController < ApplicationController

    def create
        fridge = find_fridge(params[:fridge_id])
        new_fridge_item = fridge.fridge_items.create(fridge_item_params)

        if new_fridge_item.valid?
            render json: new_fridge_item, status: :created
        else
            render json: { message: new_fridge_item.errors.full_messages.to_sentence }, status: :unprocessable_entity
        end
        
    end

    def update
        fridge_item = find_fridge_item(params[:fridge_item_id])

        if fridge_item.update(fridge_item_params)
            render json: fridge_item, status: :ok
        else
            render json: { message: fridge_item.errors.full_messages.to_sentence}, status: :unprocessable_entity
        end
    end

    protected

    def fridge_item_params
        params.permit(:grocery_id, :quantity)
    end

    def find_fridge(fridge_id)
        fridge = current_user.fridges.find_by(id: fridge_id)
    end

    def find_fridge_item(fridge_item_id)
        fridge = find_fridge(params[:fridge_id])
        fridge_item = fridge.fridge_items.find_by(id: fridge_item_id)
        return fridge_item
    end

end
