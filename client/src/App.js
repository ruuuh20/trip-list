import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/navbar'
import Trips from './containers/trips'
import TripsShow from './containers/TripsShow'
import TripsNew from './containers/TripsNew'
import Attractions from './containers/Attractions'
import AttractionsShow from './containers/AttractionsShow'
import AboutPage from './components/about'
import SearchPage from './components/SearchPage'

class App extends Component {

  render() {
    return (
      <Router>

        <div className="App">
          <NavBar />
          <h1 className="App-title">Trip List App</h1>
          <p className="App-intro">Create your trip list.</p>
          <Route exact path="/" component={Trips} />
          <Switch>

            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/search" component={SearchPage} />

            <Route exact path="/trips" component={Trips} />
            <Route path="/trips/:tripId" component={TripsShow} />
            <Route exact path="/attractions" component={Attractions} />
            <Route path="/attractions/:attractionId" component={AttractionsShow} />
          </Switch>


        </div>
      </Router>
    );
  }
}

export default App;
