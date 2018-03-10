import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/navbar'
import Trips from './components/trips'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar/>
        <h1 className="App-title">Trip List App</h1>
        <p className="App-intro">Choose your trip.</p>
        <Trips />
      </div>
      </Router>
    );
  }
}

export default App;
