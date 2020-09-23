import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiGiantSquid } from 'react-icons/gi';
import './styles.scss';

const Menu = () => (
  <div className="menu">
    <nav className="menu__nav">
      <span className="menu__nav--icon">
        <NavLink
          to="/"
          exact
        >
          <GiGiantSquid size={30} />
        </NavLink>
      </span>
      <li className="menu__nav--li">
        <NavLink
          to="/login"
          exact
        >
          Connexion
        </NavLink>
      </li>
      <li className="menu__nav--li">
        <NavLink
          to="/register"
          exact
        >
          Inscription
        </NavLink>
      </li>
    </nav>
  </div>
);

export default Menu;
