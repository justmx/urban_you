import {
  combineReducers
} from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../saga/';

export default () => {
  const rootReducer = combineReducers({
    bookingInfo: require('./BookingRedux').reducer
  });
  return configureStore(rootReducer, rootSaga);
};
