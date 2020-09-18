/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import { GiGiantSquid } from 'react-icons/gi';

const MenuDesktop = () => (
  <div className="menuDesktop">
    <nav className="menuDesktop__nav">
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
          to="/admin/userlist"
          exact
        >
          Administration
        </NavLink>
      </li>
      <li className="menu__nav--li">
        <NavLink
          to="/user/{id}"
          exact
        >
          Mon profil
        </NavLink>
      </li>
      <li className="menu__nav--li">
        <NavLink
          to="/travels/list"
          exact
        >
          Mes voyages
        </NavLink>
      </li>
      <li className="menu__nav--li">
        <NavLink
          to="/travels/follow/list"
          exact
        >
          Voyages suivis
        </NavLink>
      </li>
      <li className="menu__nav--li">
        <NavLink
          to="/"
          exact
        >
          Déconnexion
        </NavLink>
      </li>
    </nav>
  </div>
);

export default MenuDesktop;
