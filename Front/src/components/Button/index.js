import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ text }) => (
  <header className="button">
    <button type="button" className="button__elmt">{text}</button>
  </header>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
