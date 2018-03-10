import React from 'react';

const Trips = (props) => (
  <div>
    {props.trips.map(trip =>
      <div>
        <h3>{trip.name}</h3>
      </div>
    )}

  </div>
)

export default Trips
