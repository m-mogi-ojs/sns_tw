class TestController < ApplicationController
  def index
    render json: { status: 'SUCCESS' }
  end
end
