import React, {Component} from 'react';
import './trips.css'
import { bindActionCreators } from 'redux';
import TripForm from './TripForm'
import { connect } from 'react-redux';
import { getTrips } from '../actions/trips'

class Trips extends Component {

  componentDidMount() {
    this.props.getTrips()
  }

  render() {
    return (
      <div className="tripsContainer">
        {this.props.trips.map(trip => {
          return (
            <div key={trip.id} className="tripCard">
            <h1>{trip.destination}</h1>
          </div>
        )}
        )}
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
