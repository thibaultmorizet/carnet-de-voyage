/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import './styles.scss';
import { GiGiantSquid } from 'react-icons/gi';

const MenuDesktop = () => {
  const deleteCookie = () => {
    Cookies.remove('token');
    Cookies.remove('loggedIn');
  };
  return (
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
        {/* <li className="menu__nav--li">
          <NavLink
            to="/admin/userlist"
            exact
          >
            Administration
          </NavLink>
        </li> */}
        <li className="menu__nav--li">
          <a
            href="/user/myprofile"
          >
            Mon profil
          </a>
        </li>
        <li className="menu__nav--li">
          <NavLink
            to="/travels/list"
            exact
          >
            Mes voyages
          </NavLink>
        </li>
        {/* <li className="menu__nav--li">
          <NavLink
            to="/travels/follow/list"
            exact
          >
            Voyages suivis
          </NavLink>
        </li> */}
        <li className="menu__nav--li">
          <a
            href="/"
            onClick={deleteCookie}
          >
            Déconnexion
          </a>
        </li>
      </nav>
    </div>
  );
};

export default MenuDesktop;
