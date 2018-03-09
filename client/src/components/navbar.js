import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}


export const NavBar = (props) => {
  return (
    <NavLink
     to="/about"
     exact
     style={link}
     activeStyle={{
       background: 'darkblue'
     }}
   >About</NavLink>
  )
}
