import React from 'react';
import './trips.css'

const Trips = (props) => (
  <div className="tripsContainer">
    {props.trips.map(trip =>
      <div className="tripCard">
        <h3>{trip.name}</h3>
      </div>
    )}

  </div>
)

export default Trips
