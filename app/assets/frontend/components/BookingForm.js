import React, {PropTypes} from "react";
import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";
import DatePickerInput from "./common/DatePickerInput";
import RadioButtonInput from "./common/RadioButtonInput";
import SimpleSelectInput from "./common/SimpleSelectInput";
import CheckBoxInput from "./common/CheckBoxInput";

const BookingForm = ({booking, onSave, onChange, saving, errors, onDateChange,onExtraChange,bookingDate,onAddressChange, onUserChange}) => {
  //All the following options and default booking details should be retrieved from backend with a start_up request
let serviceTypeOptions=[{text: "Regular Clean", value: "rc"},{text: "Spring Clean", value: "sc"}];
let roomOptions=["2","3","4","5","6"];
let timeRangeOptions=["8-9am", "9-10am", "10-11am","11-12pm","12-13pm","13-14pm","14-15pm","15-16pm","16-17pm"];
let extraOptions=[{text: "Inside Windows", value: "iw"},{text: "Outside Windows", value: "ow"},{text: "Fridge", value: "fr"},{text: "Bolcony", value: "bo"}];

  return (
    <section className="col-sm-8">
        <form className="form-horizontal">

          <RadioButtonInput
              name="service_type"
              label="Service Type"
              options={serviceTypeOptions}
              onChange={onChange}
              error={errors.serviceType}
              selected={booking['booking_detail'].service_type}/>

          <SimpleSelectInput
            name="bed_no"
            label="Beds"
            value={booking['booking_detail'].bed_no}
            onChange={onChange}
            defaultOption="1"
            options={roomOptions}
            divClass="col-sm-2"
            error={errors.bedNo}/>

          <SimpleSelectInput
            name="bath_no"
            label="BathRooms"
            value={booking['booking_detail'].bath_no}
            onChange={onChange}
            defaultOption="1"
            options={roomOptions}
            divClass="col-sm-2"
            error={errors.bedNo}/>

            <CheckBoxInput
              name="extra"
              label="Extras"
              onChange={onExtraChange}
              options={extraOptions}
              serviceType={booking['booking_detail'].service_type}
              error={errors.bedNo}
              extras={booking['booking_detail'].extras}/>

          <DatePickerInput
            name="bookingDate"
            label="Date"
            value={bookingDate}
            onChange={onDateChange}
            divClass="field col-sm-3"
            error={errors.bookingDate}/>


          <SimpleSelectInput
            name="time_range"
            label="Time"
            value={booking['booking_detail'].time_range}
            onChange={onChange}
            defaultOption="7-8am"
            options={timeRangeOptions}
            divClass="col-sm-3"
            error={errors.bookingTime}/>

          <TextInput
            name="address1"
            label="Address"
            value={booking['address_attributes'].address1}
            onChange={onAddressChange}
            placeholder="eg: 605/ 3 Waverley St"
            divClass="field col-sm-4"
            error={errors.address1}/>

          <TextInput
            name="address2"
            label=""
            value={booking['address_attributes'].address2}
            divClass="field col-sm-4"
            onChange={onAddressChange}
            placeholder="eg: Bondi Junction"
            error={errors.address2}/>

          <TextInput
            name="postcode"
            label="Postcode"
            value={booking['address_attributes'].postcode}
            divClass="field col-sm-2"
            onChange={onAddressChange}
            error={errors.postcode}/>

          <TextInput
            name="name"
            label="Name"
            value={booking['user_attributes'].name}
            onChange={onUserChange}
            divClass="field col-sm-4"
            error={errors.name}/>


            <TextInput
              name="email"
              label="Email"
              value={booking['user_attributes'].email}
              onChange={onUserChange}
              divClass="field col-sm-4"
              error={errors.email}/>

          <input
            type="submit"
            disabled={saving}
            value={saving ? "Booking..." : "Book"}
            className="btn btn-primary"
            onClick={onSave}/>

        </form>
    </section>
  );
};

BookingForm.propTypes = {
   booking: PropTypes.object.isRequired,
   onSave: PropTypes.func.isRequired,
   onChange: PropTypes.func,
   onDateChange: PropTypes.func,
   saving: PropTypes.bool,
   errors: PropTypes.object,
   onExtraChange: PropTypes.func,
   onAddressChange: PropTypes.func,
   onUserChange: PropTypes.func,
   bookingDate: PropTypes.object
  // radioOptions: PropTypes.array
};

export default BookingForm;
