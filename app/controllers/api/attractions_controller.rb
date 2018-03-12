class Api::AttractionsController < ApplicationController
  before_action :set_attraction, only: [:update, :show, :destroy, :edit]

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
    if @attraction
      render json: @attraction
    else
      render json: { message: "Not found" }, status: 404
    end
  end

  def update
    if @attraction.update(attraction_params)
      render json: @attraction
    else
      render json: { message: @attraction.errors }, status: 400
    end
  end

  def destroy
    if @attraction.destroy
      render json: { message: "Deleted" }, status: 204
    else
      render json: { message: "Unable to remove" }, status: 400
    end
  end

  private
  #helper
    def set_attraction
      @attraction = Attraction.find_by(id: params[:id])
    end

    def attraction_params
      params.require(:attraction).permit(:name, :city, :category, :img_url, :price, :website)
    end


end
