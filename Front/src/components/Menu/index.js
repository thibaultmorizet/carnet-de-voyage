import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Menu = () => (
  <div className="menu">
    <nav className="menu__nav">
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
