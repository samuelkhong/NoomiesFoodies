require "test_helper"

class UserTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "should create a new user" do
    
    assert_difference('User.count', 1) do
      post 'users/registrations', params: {email: "foo@email.com", password: '123456'}, as: :json
    end
    assert_response :created
  end
end
