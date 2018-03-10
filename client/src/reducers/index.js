import { combineReducers } from 'redux';
import TripReducer from './tripReducer';

const rootReducer = combineReducers({
  trips: TripReducer
})

export default rootReducer;
