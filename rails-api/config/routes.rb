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
  resources :grocery, only: [:create, :index]
  # Defines the root path route ("/")
  # root "articles#index"

  resources :shopping_list, only: [:index, :show, :create, :update, :destroy]


end
