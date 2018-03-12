import React, { Component } from 'react';
import { connect } from 'react-redux';

//
// const TripsShow = ({ trip }) => {
// // debugger
//   return (
//     <div>
//       <h3>{trip.destination}</h3>
// hi
//
//     </div>
//   )
// }

class TripsShow extends Component {
  render() {
    const { trip } = this.props;

    return (
      <div>

      <h1>{trip.destination}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const trip = state.trips.find(trip => trip.id === +ownProps.match.params.tripId)
  // debugger
  if (trip) {
    return { trip }
  } else {
    return { trip: {} }
  }
}

export default connect(mapStateToProps)(TripsShow);
