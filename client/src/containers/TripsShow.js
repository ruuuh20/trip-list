import React, { Component } from 'react';
import { connect } from 'react-redux';
import AttractionCard from '../components/AttractionCard'

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

    const { trip, parisAttractions } = this.props;
    // parisAttractions returns an array of objects
    // debugger
    return (
      <div>
      <h1>{trip.destination}</h1>

        <h2>{trip.destination} Attractions</h2>

        {parisAttractions.map(item => {
          return (
          <AttractionCard key={item.id} attraction={item}/>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const trip = state.trips.find(trip => trip.id === +ownProps.match.params.tripId);
  const parisAttractions = state.attractions.filter(att => att.city === trip.destination)

  if (trip && parisAttractions) {
    return { trip, parisAttractions }
  } else if (trip) {
    return { trip }
  } else {
    return { trip: {} }
  }
}

// const mapStateToProps = (state, ownProps) => {
//   const trip = state.trips.find(trip => trip.id === +ownProps.match.params.tripId);
//
//   if (trip) {
//     return {trip }
//   }
//     else {
//       return { trip: {} }
//     }
//   }


export default connect(mapStateToProps)(TripsShow);
