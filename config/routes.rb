Rails.application.routes.draw do

  root 'home#index'

  resources :bookings
  
end
