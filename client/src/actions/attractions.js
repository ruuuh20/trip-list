const setAttractions = attractions => {
  return {
    type: 'GET_TRIPS',
    attractions
  }
}

export function getAttractions() {
  return dispatch => {
    // dispatch({type: 'FETCH_TRIPS'});
    return fetch('http://localhost:3000/api/attractions')
    .then(resp => resp.json())

    .then(attractions => {
      dispatch( setTrips(attractions))
    })
    .catch(error => console.log(error))
  }
}
