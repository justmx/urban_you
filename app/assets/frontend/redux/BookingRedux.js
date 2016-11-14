import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  bookingRequest: ['booking'],
  bookingSuccess: ['bookingSuccessInfo'],
  bookingFailure: null
});

export const BookingTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  bookingSuccessInfo: null,
  fetching: null,
  error: null
});

export const request = (state, action) =>
  state.merge({ fetching: true });


export const success = (state, action) => {
  const { bookingSuccessInfo } = action;
  return state.merge({ fetching: false, error: null, bookingSuccessInfo });
};


export const failure = state =>
  state.merge({ fetching: false, error: true, bookingSuccessInfo: null });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BOOKING_REQUEST]: request,
  [Types.BOOKING_SUCCESS]: success,
  [Types.BOOKING_FAILURE]: failure
});
