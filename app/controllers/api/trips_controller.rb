class Api::TripsController < ApplicationController

  def index
    @trips = Trip.all
  end

  def create
    trip = Trip.new(trip_params)
    if trip.save
      render json: trip
    else
      render json: { message: trip.errors }, status: 400
    end
  end

  private
    def trip_params
      params.requre(:trip).permit(:destination)
    end

end
