const SearchReducer = (state = {keywords: ""}, action) => {
  console.log(action);
  switch(action.type) {
    case 'UPDATE_SEARCH':
      return {...state, keywords: action.searchKeywords}
    case 'RETRIEVE_SEARCHES':
      return {...state, prevSearches: action.prevSearches}
    case 'CLEAR_HISTORY':
      return {...state, prevSearches: []}
    default:
      return state;
  }
}

export default SearchReducer;
