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
    this.props.getTrips()
  }

  render() {
    const { match, trips } = this.props;
    return (
      <div>
      <div className="tripform">
        <TripsNew />
      </div>
      <h1>CITIES</h1>
        <div className="tripsContainer">
          {this.props.trips.map(trip =>
            <TripCard key={trip.id} trip={trip} /> )}
        </div>
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
