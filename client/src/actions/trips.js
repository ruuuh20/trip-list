
const setTrips = trips => {
  return {
    type: 'GET_TRIPS',
    trips
  }
}

const removeTrip = trip => {
  return {
    type: 'DELETE_TRIP',
    trip
  }
}

export function getTrips() {
  return dispatch => {
    // dispatch({type: 'FETCH_TRIPS'});
    return fetch('/api/trips')
    .then(response => response.json())

    .then(trips => {
      console.log("hi")
      console.log(trips)
      dispatch( setTrips(trips))
    })
    .catch(error => console.log(error))
  }
}

// export function addTrip(trip) {
//
//   return {
//     type: 'ADD_TRIP',
//     trip: Object.assign({}, trip)
//   }
// }
export const addTrip = trip => {
  return dispatch => {
    return fetch('/api/trips', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ trip: trip })
    })
    .then(resp => resp.json())
    .then(trip => {

      dispatch({ type: 'ADD_TRIP', trip })
  })
  }
}

export const deleteTrip = trip => {
  return dispatch => {
    return fetch(`/api/trips/${trip.id}`, {
      method: 'DELETE'
    })
    .then(resp => dispatch(removeTrip(trip)))
    .catch(error => console.log(error))
  }
}

// export const addLikes = trip => {
//   // console.log(trip)
//   return dispatch => {
//     return fetch(`/api/trips/${trip.id}`, {
//       method: 'PUT',
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify({trip})
//     })
//     .then(resp => resp.json())
//     .then(data => {
//       // debugger
//       dispatch({ type: 'ADD_LIKES', data })
//     })
//       .catch(error => console.log(error))
//
//   }
// }

export const addLikes = (id, newlikes) => {
  // console.log(id)
  return dispatch => {
    return fetch(`/api/trips/${id}`, {
      method: 'PUT',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
      body: JSON.stringify({trip: {likes: newlikes}}),
    })
    .then(response => response.json())
    .then(trip => {
      dispatch({type: 'ADD_LIKES', id});
    })
    .catch(error => console.log(error));
  }
}
