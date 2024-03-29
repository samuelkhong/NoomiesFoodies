# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController

  # Enabling Devise to respond to json
  respond_to :json
  
  # before_action :configure_sign_up_params, only: [:create]
  # before_action :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
  # def new
  #   super
  # end

  # POST /resource
   def create
      build_resource(sign_up_params)

      if resource.save
        sign_in(resource)
        render json: {user: resource, message: 'Successfully signed up'}, status: :created
      else
        render json: { message: resource.errors.full_messages.to_sentence}, status: :unprocessable_entity
      end
     
   end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
   def update
     @user = User.find(params[:id])

     if @user.update(user_params)
        render json: @user, status: :created
     else
        render json: { message: @user.errors.full_messages.to_sentence}, status: :unprocessable_entity
     end

   end

  # DELETE /resource
   def destroy
    @user = User.find(params[:id])
    @user.update(archived_at: Time.current.to_s)
    head :no_content
   end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

   protected

   # will update permitted params as needed
   def sign_up_params 
      params.permit(:email, :password, :password_confirmation)
   end

   def user_params
    params.permit(:email)
   end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_up_params
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:attribute])
  # end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
