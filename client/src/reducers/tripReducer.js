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
    case 'ADD_LIKES':
        let index = state.findIndex(trip => trip.id === action.data.id)
        let trip = state[index]
        return [
          ...state.slice(0, index),
          Object.assign({}, trip, { likes: trip.likes += 1 }),
          ...state.slice(index+1)
        ]


      default:
        return state;
  }
}
