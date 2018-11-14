import React, { Component } from 'react';
import { connect } from 'react-redux';
import AttractionCard from '../components/AttractionCard'
import AttractionsNewWithCity from './AttractionsNewWithCity'
import { deleteTrip, getTrips } from '../actions/trips'
import { bindActionCreators } from 'redux'




class TripsShow extends Component {

  componentDidMount = () => {
    this.props.getTrips()
  }

  handleOnClick = () => {
    this.props.deleteTrip(this.props.trip)
    this.props.history.push('/')

  }
  render() {

    const { trip, cityAttractions } = this.props;
    console.log("um")
    // cityAttractions returns an array of objects
    // debugger
    return (
      <div>
      <h1>{trip.destination}</h1>

        <h2>({cityAttractions.length ? cityAttractions.length : 0}) Places to visit in {trip.destination}</h2>
        {cityAttractions.map(item => {
          return (
          <AttractionCard key={item.id} attraction={item}/>
          )
        })}

        <AttractionsNewWithCity trip={trip} />
        <button className="backbutton" onClick={() => this.props.history.goBack()}>GO BACK</button>
        <button onClick={this.handleOnClick}>Delete this trip</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  {trips: state.trips}

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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTrips,
    deleteTrip,
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(TripsShow);
