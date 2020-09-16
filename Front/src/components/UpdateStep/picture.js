import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const Picture = ({ url, src, onDelete }) => {
  const essai = (evt) => {
    console.log('je suis dans essai');
    const elt = evt.currentTarget;
    console.log('je suis dans essai2');
    const parent = elt.parentElement;
    console.log('je suis dans essai3');
    onDelete(parent.firstChild.id);
    parent.style.display = 'none';
  };
  return (
    <div className="FormUpdateStep__formElt--pictures">
      <img className="pictures__n1" src={src} id={url} alt={url} />
      <FontAwesomeIcon icon={faTimes} className="pictures__icon" onClick={essai} />
    </div>
  );
};

export default Picture;
