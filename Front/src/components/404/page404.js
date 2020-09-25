import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import { GiDinosaurRex } from 'react-icons/gi';
import img from '../../assets/images/trex404.png';

const NotFound = () => (
  <div className="notFound__container">
    <h3 className="notFound--title">404 page not found</h3>
    <span className="notFound--icon">
      <NavLink
        to="/"
        exact
      >
        <GiDinosaurRex size={100} />
      </NavLink>
    </span>
    <p className="notFound--home">Clique au dessus pour revenir à l'accueil !</p>
    <img src={img} alt="" />
    <p className="notFound--description">Vous n'avez rien à faire ici GRRRRRRRR !!!</p>
  </div>
);

export default NotFound;
