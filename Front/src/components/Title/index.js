import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Title = ({ text }) => (
  <div className="title">{text}</div>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
