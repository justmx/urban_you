import React, {PropTypes} from 'react';

const SimpleSelectInput = ({name, label, onChange, defaultOption, value, error, options, labelClass, divClass}) => {
  return (

    <div className="form-group">
        <label htmlFor={name} className="col-sm-2">{label}</label>
        <div className={divClass}>
          <select
            className="form-control"
            name={name}
            value={value}
            onChange={onChange}
            className="form-control">
            <option value="">{defaultOption}</option>
            {options.map((option) => {
              return <option key={option} value={option}>{option}</option>;
            })
            }
          </select>
          {error && <div className="alert alert-danger">{error}</div>}
         </div>
    </div>
  );
};

SimpleSelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultOption: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.array
};

export default SimpleSelectInput;
