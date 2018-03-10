
const setTrips = trips => {
  return {
    type: 'GET_TRIPS',
    trips
  }
}

export function getTrips() {
  return (dispatch) => {
    // dispatch({type: 'FETCH_TRIPS'});
    return fetch('http://localhost:3000/api/trips')
    .then(resp => resp.json())

    .then(trips => {
      dispatch( setTrips(trips))
    })
    .catch(error => console.log(error))
  }
}

export function addTrip(trip) {
  
  return {
    type: 'ADD_TRIP',
    trip: Object.assign({}, trip)
  }
}
