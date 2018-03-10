import React from 'react';

const TripCard = ({trip}) => (
  <div key={trip.id} className="tripcard">
    <h1>{trip.destination}</h1>
  </div>
)

export default TripCard;
