export default function TripReducer(state = []
, action) {
  switch(action.type) {
    case 'GET_TRIPS':
      return action.trips;

    case 'ADD_TRIP':
      // return [ ...state, action.trip ];
       return state.concat(action.trip);
    case 'DELETE_TRIP':
        const trips = state.filter(trip => trip.id !== action.trip.id)
        return trips;


      default:
        return state;
  }
}
