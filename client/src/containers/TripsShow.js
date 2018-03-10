import React from 'react';
import { connect } from 'react-redux';


const TripsShow = ({ trip }) => {

  return (
    <div>
      <h3>{trip.destination}</h3>

    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const trip = state.trips.find(trip => trip.id === ownProps.match.params.id)

  if (trip) {
    return { trip }
  } else {
    return { trip: {} }
  }
}

export default connect(mapStateToProps)(TripsShow);
