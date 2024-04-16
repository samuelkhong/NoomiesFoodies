Rails.application.routes.draw do

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  resources :fridge, only: [:create, :update, :show, :index]

  # devise_scope :user do
  #   get "sign_up", to: 'users/registrations#create'
  # end
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :grocery, only: [:index]
  resources :fridge_item, only: [:create, :update]

  # Defines the root path route ("/")
  # root "articles#index"

  resources :shopping_list, only: [:index, :show, :create, :update, :destroy]

  resources :food, only: [:index, :create, :update, :destroy]
  resources :recipes do
    get 'foods', to: 'foods#index_by_recipe', on: :member
  end
end
