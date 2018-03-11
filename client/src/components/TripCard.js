import React from 'react';
import { Link, Route } from 'react-router-dom'
import TripsShow from '../containers/TripsShow'

const TripCard = ({trip}) => (
  <div key={trip.id} className="tripcard">
    <h1>{trip.destination}</h1>
    <Link to={`/trips/${trip.id}`} className="trip-item">Show</Link>
  
  </div>
)

export default TripCard;
