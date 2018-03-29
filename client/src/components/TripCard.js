import React, {Component } from 'react';
import { Link, Route } from 'react-router-dom'
import TripsShow from '../containers/TripsShow'



class TripCard extends Component {

  // refactoring during project review (added like counter in state and call api button)
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     counter: 0
  //   }
  //
  //
  // }
  //
  // handleOnClick = (event) => {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   })
  //
  // }
  //
  // callApi = () => {
  //   //console.log('a')
  //   fetch('http://localhost:3000/api/trips')
  //   .then(resp => {
  //     //console.log(resp)
  //     if (resp.status !== 200) {
  //       throw new Error("bad request")
  //     } else {
  //       //console.log('b')
  //       return resp.json()
  //     }
  //   })
  //   .then(resp => {
  //     console.log('c', resp)
  //     return "hello"
  //   })
  //   .then(text => {
  //     console.log(text)
  //     return text + " Cernan"
  //   })
  //   .then(otherText => console.log(otherText))
  //   .catch(err =>  console.log('d', err))


    //console.log('e')

    // a e b c + data

    // a e d + err


  render() {
    return (
    <div key={this.props.trip.id} className="tripcard">

      <h1><Link to={`/trips/${this.props.trip.id}`} className="trip-item">{this.props.trip.destination}</Link></h1>


    </div>
  )
  }

}



export default TripCard;
