export default function TripReducer(state = []
, action) {
  switch(action.type) {
    case 'GET_TRIPS':
      return action.trips;

    case 'ADD_TRIP':
      // return [ ...state, action.trip ];
       return state.concat(action.trip);


      default:
        return state;
  }
}
