// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import BookingActions from '../redux/BookingRedux';
import {browserHistory} from 'react-router';

class SuccessPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      bookingSuccessInfo: this.props.bookingSuccessInfo,
      fetching: this.props.fetching
    };
    this.redirect =this.redirect.bind(this);
  }

  componentWillReceiveProps (newProps) {
    if (newProps) {
      this.setState({bookingSuccessInfo: newProps.bookingSuccessInfo, fetching: newProps.fetching});
    }
  }

  redirect() {
      browserHistory.push('/');
    }

  render() {
      if(this.state.fetching){
        return (
        <div id="success">
          Waiting....
        </div>
      );
      } else {
        return (
        <div id="success">
          <h1>Thanks for Booking</h1>
          <div> Booking ID: {this.state.bookingSuccessInfo.id}</div>
          <div> Total: ${this.state.bookingSuccessInfo.total_price}</div>
          <div id="info"> Your cleaner wiil arrive bwtween {this.state.bookingSuccessInfo.time_range} on {new Date(this.state.bookingSuccessInfo.date).toDateString()}</div>
        </div>
    );
    }
  }
}

SuccessPage.propTypes = {
  fetching: PropTypes.bool,
  bookingSuccessInfo: PropTypes.object
};


function mapStateToProps(state, ownProps) {
  return {
    fetching: state.bookingInfo.fetching,
    bookingSuccessInfo: state.bookingInfo.bookingSuccessInfo
  };
}


function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessPage);
