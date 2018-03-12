const setAttractions = attractions => {
  return {
    type: 'GET_ATTRACTIONS',
    attractions
  }
}

export function getAttractions() {
  return dispatch => {
    // dispatch({type: 'FETCH_TRIPS'});
    return fetch('http://localhost:3000/api/attractions')
    .then(resp => resp.json())

    .then(attractions => {
      dispatch( setAttractions(attractions))
    })
    .catch(error => console.log(error))
  }
}

export const addAttraction = attraction => {
  return dispatch => {
    return fetch('/api/attractions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( { attraction: attraction })
    })
    .then(resp => resp.json())
    .then(attraction => {
      dispatch({ type: 'ADD_ATTRACTION', attraction })
    })
  }

}
