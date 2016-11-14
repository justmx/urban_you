import React, {PropTypes} from 'react';
import DatePicker from 'react-datepicker';

//var moment = require('moment');
const DatePickerInput = ({name, label, onChange, value, error, divClass}) => {
    let wrapperClass = 'form-group';
    if(error && error.length > 0){
      wrapperClass +=" " + 'has-error';
    }

    return (
      <div className={wrapperClass}>
          <label htmlFor={name} className="col-sm-2">{label}</label>
          <div className={divClass}>
            <DatePicker
            dateFormat="YYYY-MM-DD"
            selected={value}
            placeholderText="Click to select a date"
            onChange={onChange}/>
            {error && <div className="alert alert-danger">{error}</div>}
           </div>
     </div>
    );
  };

  DatePickerInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.object,
    error: PropTypes.string
  };

  export default DatePickerInput;
