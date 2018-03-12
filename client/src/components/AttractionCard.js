import React from 'react';
import { Link, Route } from 'react-router-dom'


const AttractionCard = ({attraction}) => (
  <div key={attraction.id} className="attractioncard">
    <h1>{attraction.destination}</h1>
    <Link to={`/attractions/${attraction.id}`} className="attraction-item">Show</Link>

  </div>
)

export default AttractionCard;
