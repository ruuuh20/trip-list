import React, {Component} from 'react';
import './trips.css'
import { bindActionCreators } from 'redux';
import TripForm from './TripForm'
import { connect } from 'react-redux';
import { getTrips } from '../actions/trips';
import TripCard from '../components/TripCard';
import TripsShow from './TripsShow'
import { Route } from 'react-router-dom'

class Trips extends Component {

  componentDidMount() {
    this.props.getTrips()
  }

  render() {
    return (
      <div className="tripsContainer">
        {this.props.trips.map(trip =>
          <TripCard key={trip.id} trip={trip} /> )}
          
        <TripForm />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    trips: state.trips
  })
}

export default connect(mapStateToProps, { getTrips })(Trips)
