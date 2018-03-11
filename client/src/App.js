import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <p className="App-intro">Make your trip wishlist.</p>
          <Switch>
            <Route exact path="/" component={Trips} />
            <Route exact path="/trips" component={Trips} />
            <Route path="/trips/:tripId" component={TripsShow} />






          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
