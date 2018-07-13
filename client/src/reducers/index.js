import { combineReducers } from 'redux';
import TripReducer from './tripReducer';
import AttractionsReducer from './attractionsReducer';
import SearchReducer from './searchReducer';

const rootReducer = combineReducers({
  search: SearchReducer,
  trips: TripReducer,
  attractions: AttractionsReducer,

})

export default rootReducer;
