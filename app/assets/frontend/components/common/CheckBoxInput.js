import React, {PropTypes} from 'react';

const CheckBoxInput = ({name, label, onChange, error, options, selected,serviceType,extras}) => {
  let wrapperClass = 'form-group';
  if(serviceType !=='sc'){
    wrapperClass +=" " + 'hidden';
  }

  return (
    <div className={wrapperClass}>
        <label htmlFor={name} className="col-sm-2">{label}</label>
        <div className="btn-group col-sm-3">
        {options.map((option, index) => {
        let isChecked = extras.includes(option.text);
          return  (
              <div className="checkbox" key={option.text}>
                  <label>
                    <input type="checkbox" key={option.value} id={option.value} value={option.value} name={option.text} onClick={onChange} checked={isChecked}/>  {option.text}
                  </label>
              </div>
                   );
                 })}
         </div>
           {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

CheckBoxInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.string,
  extras: PropTypes.array
};

export default CheckBoxInput;
