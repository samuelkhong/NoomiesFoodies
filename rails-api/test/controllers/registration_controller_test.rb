require 'test_helper'

class RegistrationsControllerTest < ActionController::TestCase 

include Devise::Test::ControllerHelpers

  def setup
    @controller = Users::RegistrationsController.new
  end

  test "should create a new user" do
    user_params = { email: 'foobar@example.com', password: '123456'}  

    assert_nil User.find_by(email: 'foobar@example.com')

    post :create, params: user_params, as: :json

    assert_response :success

  end


    # test "should create a new user" do
  
    #   binding.pry
    #     assert_difference('User.count', 1) do
    #       post '/users/registration', params: {email: "bar@email.com", password: '123456'}, as: :json
    #     end
    #     assert_response :created
    #   end
end