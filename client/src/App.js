import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/navbar'
import Trips from './containers/trips'
import TripsShow from './containers/TripsShow'

class App extends Component {

  render() {
    return (
      <Router>

      <div className="App">
        <NavBar />

        <h1 className="App-title">Trip List App</h1>
        <p className="App-intro">Choose your trip.</p>
        <Route path="/" component={Trips} />
        <Route path="/trips/:id" component={TripsShow} />
      </div>
      </Router>
    );
  }
}

export default App;
