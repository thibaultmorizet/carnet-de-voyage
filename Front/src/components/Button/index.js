import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ text }) => (
  <div className="button">
    <button type="button" className="button__elmt">{text}</button>
  </div>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
