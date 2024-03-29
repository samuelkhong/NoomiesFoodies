require 'test_helper'

class RegistrationsControllerTest < ActionController::TestCase 

  def setup
    @controller = Users::RegistrationsController.new
  end

    test "should create a new user" do
  
      binding.pry
        assert_difference('User.count', 1) do
          post '/users/registration', params: {email: "bar@email.com", password: '123456'}, as: :json
        end
        assert_response :created
      end
end