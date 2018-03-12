export default function AttractionsReducer(state = []
, action) {
  switch(action.type) {
    case 'GET_ATTRACTIONS':
      return action.attractions;

    case 'ADD_ATTRACTION':
      // return [ ...state, action.trip ];
       return state.concat(action.attraction);
    // case 'DELETE_TRIP':
    //   return


      default:
        return state;
  }
}
