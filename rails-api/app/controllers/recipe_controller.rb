class RecipeController < ApplicationController

    def index
        recipes = current_user.recipes.where(archived_at: nil)
        if recipes.empty?
            render json: { message: 'You have no recipes'}, status: :ok
        else
            render json: recipes, status: :ok
        end
    end

end
