class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  before_action :authenticate_user 

  private

  def authenticate_user
    @current_user = User.find_by(id: session[:user_id])
    render json: { error: "Not authorized" }, status: :unauthorized unless 
@current_user
end

def find_user
  @user = User.find_by(id: params[:user_id])
end

end
