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

    def update
        recipe = find_recipe(params[:id])

        if recipe.archived_at.present?
            render json: { message: 'Recipe does not exist'}, status: :unprocessable_entity
        elsif recipe.update(recipe_params)
            render json: recipe, status: :created
        else
            render json: { errors: recipe.errors.full_messages.to_sentence}
        end
    end

    def create
        new_recipe = current_user.recipes.create(recipe_params)

        if new_recipe.valid?
            render json: new_recipe, status: :created
        else
            render json: { errors: new_recipe.errors.full_messages.to_sentence}
        end
    end

    protected

    def recipe_params
        params.permit(:name, :description)
    end

    def find_recipe(id)
        current_user.recipes.find_by(id: id)
    end

end
