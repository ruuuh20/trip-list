export default function AttractionsReducer(state = []
, action) {
  switch(action.type) {
    case 'GET_ATTRACTIONS':
      return action.attractions;

    case 'ADD_ATTRACTION':
      // return [ ...state, action.trip ];
       return state.concat(action.attraction);
    case 'DELETE_ATTRACTION':
      const attractions = state.filter(att => att.id !== action.attraction.id)
      return attractions;
      // returns a new array
    case 'FETCH_VENUES':
      return {results: action.venues, submittedSearch: action.submittedSearch}



      default:
        return state;
  }
}
