import React, {Component} from 'react';
import './trips.css'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTrips, addLikes } from '../actions/trips';
import TripCard from '../components/TripCard';
import TripsShow from './TripsShow'
import { Route, Switch } from 'react-router-dom'
import TripsNew from './TripsNew'
import Attractions from './Attractions';
import SearchContainer from './SearchContainer';
// import Image from '../../public/images/home1.jpg'

class Trips extends Component {

  componentDidMount() {
    console.log("sifhshfosdif")
    // console.log(this.props)  show history, path, etc
    this.props.getTrips()
    // console.log(this.props)
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
 //  handleLikes = () => {
 //   this.props.addLikes(this.props.trip)
 // }

  render() {
    const { match, orderedTrips, addLikes } = this.props;
    let tripsSummary = ""
    if (this.props.trips.length >= 1) {

      tripsSummary = (


      this.props.trips.reverse().map(trip =>
        <TripCard key={trip.id} trip={trip} addLikes={addLikes}/> )
    )
    }
    else {
      tripsSummary = "blank"
    }
    return (
      <React.Fragment>
      <div className="intro">
        <div className="left">
        <h1>TripList</h1>
          <p>A simplified way to keep track of your travels</p>
        </div>
        <div className="right">
          <img src="/images/home1.jpg" />
        </div>

      </div>
      <h1 className="title">CITIES</h1>
        <div className="tripsContainer">




          <div className="tripform">
            <TripsNew />
            {tripsSummary}

          </div>
        </div>

      <div className="attrcontainer">
        <hr />
        <div>
          <Attractions />
        </div>
      </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return ({
    // filteredTrips: state.trips.filter(trip => trip.likes > 20),
    trips: state.trips,
    attractions: state.attractions

  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTrips, addLikes
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Trips)
