import React, {PropTypes} from 'react';

const RadioButtonInput = ({name, label, onChange, error, options, selected}) => {
  return (
    <div className="form-group">
        <label htmlFor={name} className="col-sm-2">{label}</label>
        <br/>
        <div className="btn-group">
        {options.map((option, index) => {
          return  (
                  <label className="radio-inline" key={option.text} htmlFor={option.text}>
                    <input type="radio" key={option.text} id={option.text} value={option.value} name="service_type" onChange={onChange} checked={selected==option.value}/>  {option.text}
                  </label>
                   );
                 })}
         </div>
           {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

RadioButtonInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.string
};

export default RadioButtonInput;
