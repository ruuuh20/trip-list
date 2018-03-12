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
        <div className="tripsContainer">
          {this.props.trips.map(trip =>
            <TripCard key={trip.id} trip={trip} /> )}
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    trips: state.trips
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTrips }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Trips)
