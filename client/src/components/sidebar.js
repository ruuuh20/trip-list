import React from 'react';

const Sidebar = ({ attraction }) => {
  return (
  <div className="attractionside">
    <h1 id="attr-name">{attraction.name}</h1>
    <h4>{attraction.category}</h4>
    <p>city: {attraction.city}</p>
    <p>price: {attraction.price}</p>
    <p>website: {attraction.website}</p>
  </div>
  )
}

export default Sidebar;
