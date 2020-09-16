import React from 'react';
import './styles.scss';

const Picture = ({ url, src }) => (
  <div className="FormUpdateStep__formElt--pictures">
    <img className="pictures__n1" src={src} alt={url} />
  </div>
);

export default Picture;
