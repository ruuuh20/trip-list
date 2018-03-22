class Api::TripsController < ApplicationController

  def index
    render json: Trip.all
  end

  def create
    trip = Trip.new(trip_params)
    if trip.save
      render json: trip
    else
      render json: { message: trip.errors }, status: 400
    end
  end

  def show
    @trip = Trip.find_by(id: params[:id])
    if @trip
      render json: @trip
    else
      render json: { message: "Not found" }, status: 404
    end
  end

  def destroy
    @trip = Trip.find_by(id: params[:id])
    if @trip.destroy
      render json: { message: "Deleted" }, status: 204
    else
      render json: { message: "Unable to remove" }, status: 400
    end
  end

  private
    def trip_params
      params.require(:trip).permit(:destination)
    end

end
