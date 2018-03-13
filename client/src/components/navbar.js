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
      <ul className="menu">
        <li><NavLink
        to="/"
        exact activeClassName="active"
        >Home</NavLink></li>

        <li><NavLink
         to="/about"
       >About</NavLink></li>



      </ul>
     </div>
    </div>
  )
}
