import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const Picture = ({ url, src, onDelete }) => {
  const handleOnClick = (evt) => {
    const elt = evt.currentTarget;
    const parent = elt.parentElement;
    onDelete(parent.firstChild.id);
    parent.style.display = 'none';
  };
  return (
    <div className="FormUpdateStep__formElt--pictures">
      <img className="pictures__n1" src={src} id={url} alt={url} />
      <FontAwesomeIcon icon={faTimes} className="pictures__icon" onClick={handleOnClick} />
    </div>
  );
};

Picture.propTypes = {
  url: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Picture;
