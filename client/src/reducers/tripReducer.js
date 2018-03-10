export default function TripReducer(state = []
, action) {
  switch(action.type) {
    case 'GET_TRIPS':
      return action.trips


      default:
        return state;
  }
}
