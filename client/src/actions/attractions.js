const setAttractions = attractions => {
  return {
    type: 'GET_ATTRACTIONS',
    attractions
  }
}

const removeAttraction = attraction => {
  return {
    type: 'DELETE_ATTRACTION',
    attraction
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

export const deleteAttraction = attraction => {
  return dispatch => {
    return fetch(`/api/attractions/${attraction.id}`, {
      method: 'DELETE'
    })
    .then(resp => dispatch(removeAttraction(attraction)))
    .catch(error => console.log(error))
  }
}

export const fetchVenues = (searchKeywords) => {
  return dispatch => {
    return fetch('/api/attractions/foursquare', {
      method: 'post',
      headers: {
       'Accept': 'application/json'
     },
     body: JSON.stringify({
        search: searchKeywords
      })
    }).then(response => {
    return response.json()
  }).then(venues => {
    if (venues.length === 0) {
        dispatch({type: 'NO_VENUES_FOUND', submittedSearch: searchKeywords })
      } else {
        dispatch({type: 'FETCH_VENUES', venues: venues, submittedSearch: searchKeywords})
      }
  })

  }
}
