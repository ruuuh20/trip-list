export default function TripReducer(state = {
  trips: []
}, action) {
  switch(action.type) {
    case 'CREATE_TRIP':
      return Object.assign(state, {
        trips: state.trips.concat(action.trip)
      });

      default:
        return state;
  }
}
