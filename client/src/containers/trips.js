import React, {Component} from 'react';
import './trips.css'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTrips } from '../actions/trips';
import TripCard from '../components/TripCard';
import TripsShow from './TripsShow'
import { Route, Switch } from 'react-router-dom'
import TripsNew from './TripsNew'
import Attractions from './Attractions'

class Trips extends Component {

  componentDidMount() {
    // console.log(this.props)  show history, path, etc
    this.props.getTrips()
  }

  // displayFiltered = (attractions) => {
  //   const filtered = this.props.attractions.filter(a => {a.category === "museum"})
  // //   filtered.forEach(function(at) {
  // //   // debugger
  // //   console.log(at.name)
  // //
  // // })
  // console.log(filtered)
  // }


  render() {
    const { match, trips } = this.props;
    return (
      <div>
      <div className="tripform">
        <TripsNew />

      </div>
      <h1 className="title">CITIES</h1>
        <div className="tripsContainer">
          {this.props.trips.map(trip =>
            <TripCard key={trip.id} trip={trip} /> )}
        </div>
        <br/>
        <br/>
        <hr />
        <Attractions />


      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    trips: state.trips,
    attractions: state.attractions

  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTrips }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Trips)
