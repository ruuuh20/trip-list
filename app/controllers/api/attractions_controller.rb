class Api::AttractionsController < ApplicationController

  def index
    render json: Attraction.all
  end

  def create
    attraction = Attraction.new(attraction_params)
    if attraction.save
      render json: attraction
    else
      render json: { message: attraction.errors }, status: 400
    end
  end

  def show
    render json: Attraction.find_by(id: params[:id])
  end

  private
    def attraction_params
      params.require(:attraction).permit(:name, :location, :img_url, :price, :website)
    end


end
