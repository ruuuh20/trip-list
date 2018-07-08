Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
      resources :attractions
      resources :trips

      post '/attractions/foursquare', to: 'attractions#foursquare'

  end

end
