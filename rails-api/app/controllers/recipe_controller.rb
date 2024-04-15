class RecipeController < ApplicationController

    def index
        recipes = current_user.recipes.where(archived_at: nil)
        if recipes.empty?
            render json: { message: 'You have no recipes'}, status: :ok
        else
            render json: recipes, status: :ok
        end
    end

    def show
        recipe = find_recipe(params[:id])
        if recipe.archived_at.present?
            render json: { message: 'Recipe does not exist'}, status: :unprocessable_entity
        else
            render json: recipe, status: :ok
        end
    end

    protected

    def find_recipe(id)
        current_user.recipes.find_by(id: id)
    end

end
