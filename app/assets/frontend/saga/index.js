import { takeLatest } from 'redux-saga';
import API from '../api/Api';
import { BookingTypes } from '../redux/BookingRedux';
import { createBooking } from './BookingSagas';

export default function * root () {
  yield [
    takeLatest(BookingTypes.BOOKING_REQUEST, createBooking, API)
  ];
}
