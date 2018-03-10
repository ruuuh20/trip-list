import React from 'react';
import { NavLink } from 'react-router-dom';

// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }


export const NavBar = (props) => {
  return (
    <div>
      <div className="navbar">
        <NavLink
        to="/"
        exact activeClassName="active"
        >Home</NavLink>
        <NavLink
         to="/about"
       >About</NavLink>
     </div>
    </div>
  )
}
