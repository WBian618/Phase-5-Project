Rails.application.routes.draw do
  
  resources :messages
  resources :follows
  resources :saved_posts
  resources :likes
  resources :comments
  resources :posts
  resources :users

  post '/signup', to: 'users#create'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
