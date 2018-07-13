export default function TripReducer(state = {trips: []}
, action) {
  switch(action.type) {
    case 'GET_TRIPS':
      return action.trips;

    case 'ADD_TRIP':
      // return [ ...state, action.trip ];
       // return state.concat(action.trip);
       return Object.assign(state, {

         trips: state.trips.concat(action.trip)
       })
    case 'DELETE_TRIP':
        const trips = state.filter(trip => trip.id !== action.trip.id)
        return trips;
    case 'ADD_LIKES':
        let newState = state.map(trip => trip.id === action.id ? Object.assign({}, trip, { likes: trip.likes + 1}) : trip)

        return newState
      default:
        return state;
  }
}
