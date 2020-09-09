import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const LoginInput = ({
  type, name, content,
}) => (
  <div className="floating-label">
    <input className="floating-input" name={name} type={type} placeholder=" " />
    <label htmlFor={name}>{content}</label>
  </div>
);

LoginInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default LoginInput;
