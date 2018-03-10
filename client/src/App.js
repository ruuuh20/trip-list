import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/navbar'
import Trips from './containers/trips'
import TripsShow from './containers/TripsShow'
import TripsNew from './containers/TripsNew'

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
          <Route exact path="/trips/new" component={TripsNew} />
        </div>
      </Router>
    );
  }
}

export default App;
