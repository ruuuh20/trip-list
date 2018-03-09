import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


import './App.css';
import { NavBar } from './components/navbar'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <NavBar>
      </NavBar>
        <header className="App-header">

          <h1 className="App-title">Trip List App</h1>
        </header>
        <p className="App-intro">
          Choose your trip.
        </p>

      </div>
      </Router>
    );
  }
}

export default App;
