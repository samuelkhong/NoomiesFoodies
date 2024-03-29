require 'test_helper'

class RegistrationsControllerTest < ActiveSupport::TestCase 
    test "should create a new user" do
    
        assert_difference('User.count', 1) do
          post user_registration_path, params: {email: "testtest@email.com", password: '123456'}, as: :json
        end
        assert_response :created
      end
end