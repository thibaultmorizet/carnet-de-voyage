import React from 'react';
import img from '../../assets/images/trex404.png';
import './styles.scss';

const NotFound = () => (
  <div className="not__container">
    <h3 className="not--title">404 page not found</h3>
    <img src={img} alt="" />
    <p className="not--description">Vous n'avez rien à faire ici GRRRRRRRR !!!</p>
  </div>
);

export default NotFound;
