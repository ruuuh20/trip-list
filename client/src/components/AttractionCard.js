import React from 'react';
import { Link, Route } from 'react-router-dom'


const AttractionCard = ({attraction}) => (
  <div key={attraction.id} className="attractioncard">
    <h2><Link to={`/attractions/${attraction.id}`} className="attraction-item">{attraction.name}</Link></h2>
    <img className="cardimage" src={attraction.img_url} />

  </div>
)

export default AttractionCard;
