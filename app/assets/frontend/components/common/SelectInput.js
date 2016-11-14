import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  return (
    <div className="form-group">
        <label htmlFor={name} className="col-sm-2 control-label">{label}</label>
        <div className="col-sm-2">
          <select
            className="form-control"
            name={name}
            value={value}
            onChange={onChange}
            className="form-control">
            <option value="">{defaultOption}</option>
            {options.map((option) => {
              return <option key={option.value} value={option.value}>{option.text}</option>;
            })
            }
          </select>
          {error && <div className="alert alert-danger">{error}</div>}
         </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultOption: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
