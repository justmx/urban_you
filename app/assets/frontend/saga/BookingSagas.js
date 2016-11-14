import {
  call,
  put
} from 'redux-saga/effects';
import BookingActions from '../redux/BookingRedux';

export function* createBooking(api, action) {
  const {
    booking
  } = action;

  const bookingInfo = yield call(api.createBooking, booking);
  yield put(BookingActions.bookingSuccess(bookingInfo));
}
