Rails.application.routes.draw do

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # devise_scope :user do
  #   get "sign_up", to: 'users/registrations#create'
  # end
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :grocery, only: [:index]
  resources :fridge_item, only: [:create, :update, :destroy]

  # Defines the root path route ("/")
  # root "articles#index"
end
