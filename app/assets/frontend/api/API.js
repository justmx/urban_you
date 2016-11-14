
export default class API {
  static createBooking(booking) {
    return new Promise((resolve, reject) => {
      $.post("/bookings", { booking })
        .success( bookingInfo =>  resolve(bookingInfo))
        .error(error => reject(error));
    });
  }
}
