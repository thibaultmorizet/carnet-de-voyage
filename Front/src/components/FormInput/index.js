/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const FormInput = ({
  type,
  name,
  content,
  onChange,
  value,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  return (
    <div className="floating-label">
      <input className="floating-input" name={name} type={type} placeholder=" " onChange={handleChange} value={value} />
      <label htmlFor={name}>{content}</label>
    </div>
  );
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

FormInput.defaultProps = {
  value: undefined,
};

export default FormInput;
