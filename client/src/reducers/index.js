import { combineReducers } from 'redux';
import TripReducer from './tripReducer';
import AttractionsReducer from './attractionsReducer'

const rootReducer = combineReducers({
  trips: TripReducer,
  attractions: AttractionsReducer
})

export default rootReducer;
