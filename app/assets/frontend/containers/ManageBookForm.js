// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import BookingForm from '../components/BookingForm';
import ResultBox from '../components/ResultBox';
import BookingActions from '../redux/BookingRedux';
import {browserHistory} from 'react-router';
import Header from '../components/Header';

let moment = require('moment');

let default_booking = {
  user_attributes: {
    name: '',
    email: ''
  },
  address_attributes: {
    address1: '',
    address2: '',
    postcode: ''
  },
  booking_detail:{
    service_type: 'rc',
    time_range: '7-8am',
    date: moment().format('YYYY-MM-DD'),
    bath_no: '1',
    bed_no: '1',
    extras: [],
    total_hours: 1,
    total_price: 32
  }
}

class ManageBookForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
       //booking: Object.assign({}, this.props.booking),
       booking: Object.assign({}, default_booking),
       errors: {},
       saving: false,
       bookingDate: moment()
    };
     this.updateBookingState = this.updateBookingState.bind(this);
     this.saveBooking = this.saveBooking.bind(this);
     this.updateDateState = this.updateDateState.bind(this);
     this.updateExtraState =this.updateExtraState.bind(this);
     this.updateAddressState =this.updateAddressState.bind(this);
     this.updateUserState =this.updateUserState.bind(this);
  }

  calculateTotalHour(_bookingDetail){
    return (parseInt(_bookingDetail.bed_no) + parseInt(_bookingDetail.bath_no) + _bookingDetail.extras.length) * 0.5;
  }
  calculateTotalPrice(_bookingDetail){
    let unit_price = _bookingDetail.service_type === 'rc' ? 32 : 35;
    return unit_price * _bookingDetail.total_hours;
  }

  updateBookingState(event){
    const field = event.target.name;
    let booking = this.state.booking;
    const value = event.target.value;
    booking['booking_detail'][field] = value;
    if(field === 'service_type'){
      if(value==='rc'){
        booking['booking_detail'].extras=[];
      }
    }
    if(field === 'bed_no' || field === 'bath_no' || field === 'service_type'){
      booking['booking_detail'].total_hours = this.calculateTotalHour(booking['booking_detail']);
      booking['booking_detail'].total_price =this.calculateTotalPrice(booking['booking_detail']);
    }
    return this.setState({booking: booking});
  }


  updateAddressState(event){
    const field = event.target.name;
    let booking = this.state.booking;
    const value = event.target.value;
    booking['address_attributes'][field] = value;
    return this.setState({booking: booking});
  }

  updateUserState(event){
    const field = event.target.name;
    let booking = this.state.booking;
    const value = event.target.value;
    booking['user_attributes'][field] = value;
    return this.setState({booking: booking});
  }

  updateDateState(mdate){
    const date = mdate.format('YYYY-MM-DD');
    let booking = this.state.booking;
    booking['booking_detail']['date'] = date;
    return this.setState({booking: booking,
      bookingDate:mdate
    });
  }


  updateExtraState(event){
    const field = event.target.name;
    const checked = event.target.checked;
    const value = event.target.value;
    let booking = this.state.booking;
    if(checked){
      booking['booking_detail'].extras.push(field);
    } else{
      booking['booking_detail'].extras = booking['booking_detail'].extras.filter(item => item !== field);
    }
    booking['booking_detail'].total_hours = this.calculateTotalHour(booking['booking_detail']);
    booking['booking_detail'].total_price =this.calculateTotalPrice(booking['booking_detail']);
    return this.setState({booking: booking});
  }

  bookingFormIsValid() {
    let formIsValid = true;
    let errors = {};
    if (!/^2\d{3}/.test(this.state.booking.address_attributes.postcode)){
      errors.postcode = 'PostCode are 2000 to 2999';
      formIsValid = false;
    }
    this.setState({errors: errors});
    return formIsValid;
  }

  redirect() {
      this.setState ({saving: false});
      browserHistory.push('/success');
      //this.context.router.push('/success');
    }

  saveBooking(event){
    event.preventDefault();
    if (!this.bookingFormIsValid()) {
    return;
  }
  this.setState ({saving: true});
  this.props.book(this.state.booking);
  this.redirect();
  }


  render() {
    //console.log(this.state.booking);
    return (
      <div>
        <Header />
        <div className="row">
          <BookingForm
            booking={this.state.booking}
            onChange={this.updateBookingState}
            onSave={this.saveBooking}
            errors={this.state.errors}
            saving={this.state.saving}
            onDateChange={this.updateDateState}
            onExtraChange={this.updateExtraState}
            bookingDate={this.state.bookingDate}
            onAddressChange={this.updateAddressState}
            onUserChange={this.updateUserState}
          />
        <ResultBox bookingDetail = {this.state.booking.booking_detail}/>
        </div>
      </div>
    );
  }
}

ManageBookForm.propTypes = {
  fetching: PropTypes.bool,
  book: PropTypes.func
};


function mapStateToProps(state, ownProps) {
  return {
    fetching: state.bookingInfo.fetching
  };
}


function mapDispatchToProps(dispatch) {
  return {
     book: (booking) => { dispatch(BookingActions.bookingRequest(booking)); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBookForm);
