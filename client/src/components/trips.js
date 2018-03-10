import React from 'react';
import './trips.css'
import TripForm from '../containers/TripForm'

const Trips = (props) => (
  <div className="tripsContainer">
    {props.trips.map(trip =>
      <div className="tripCard">
        <h1>{trip.destination}</h1>
      </div>
    )}
    <TripForm />

  </div>
)

export default Trips
