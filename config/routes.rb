Rails.application.routes.draw do
  
  resources :messages
  resources :follows
  resources :saved_posts
  resources :likes
  resources :comments
  resources :posts
  resources :users

  post "/login", to: "sessions#create"
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  delete "/logout", to: "sessions#destroy"
  get '/users', to: 'users#index'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  root to: 'posts#index'

end
