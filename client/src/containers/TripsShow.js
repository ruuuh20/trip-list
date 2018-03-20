import React, { Component } from 'react';
import { connect } from 'react-redux';
import AttractionCard from '../components/AttractionCard'
import AttractionsNewWithCity from './AttractionsNewWithCity'

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

    const { trip, cityAttractions } = this.props;
    // cityAttractions returns an array of objects
    // debugger
    return (
      <div>
      <h1>{trip.destination}</h1>

        <h2>Places to visit in {trip.destination}</h2>

        {cityAttractions.map(item => {
          return (
          <AttractionCard key={item.id} attraction={item}/>
          )
        })}

        <AttractionsNewWithCity trip={trip} />
        <button className="backbutton" onClick={() => this.props.history.goBack()}>GO BACK</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const trip = state.trips.find(trip => trip.id === +ownProps.match.params.tripId);
  const cityAttractions = state.attractions.filter(att => att.city === trip.destination)

  if (trip && cityAttractions) {
    return { trip, cityAttractions }
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
