# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  #Enabling Devise to respond to json
  respond_to :json

  # before_action :configure_sign_in_params, only: [:create]

  
  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    user = User.find_for_database_authentication(email: params[:email])

    if user && user[:archived_at] == nil && user.valid_password?(params[:password])
      sign_in(user)
      render json: {user: user, message: 'Successfully signed in'}, status: :created
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
