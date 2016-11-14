import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error, divClass }) => {
  let wrapperClass = 'form-group';
  if(error && error.length > 0){
    wrapperClass +=" " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
        <label htmlFor={name} className="col-sm-2">{label}</label>
        <div className={divClass}>
          <input
            type="text"
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}/>
          {error && <div className="alert alert-danger">{error}</div>}
         </div>
   </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
