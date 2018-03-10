import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/navbar'
import Trips from './components/trips'


// let trips = [
//   { name: 'Tokyo', id: 1},
//   { name: 'Seoul', id: 2 },
//   { name: 'London', id: 3 }
// ]

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      trips: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/api/trips')
    .then(resp => resp.json())

    .then(trips => this.setState({ trips}))

  }
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar/>
        <h1 className="App-title">Trip List App</h1>
        <p className="App-intro">Choose your trip.</p>
        <Trips trips={this.state.trips}/>
      </div>
      </Router>
    );
  }
}

export default App;
