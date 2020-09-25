/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import Button from '../Button';
import Menu from '../Menu';
import MenuDesktop from '../MenuDesktop';
import MenuBurger from '../MenuBurger';
import './styles.scss';

const Header = () => (
  <header className="headerHomePage">
    <div className="headerHomePage__mobile">
      {!Cookies.get('loggedIn') && (
      <NavLink
        to="/login"
        exact
      >
        <Button className="headerHomePage__mobile--button" text="Connexion" />
      </NavLink>
      )}

      {Cookies.get('loggedIn') && (
      <MenuBurger />
      )}

    </div>

    <div className="headerHomePage__desktop">
      {!Cookies.get('loggedIn') && (
      <Menu />
      )}
      {Cookies.get('loggedIn') && (
      <MenuDesktop />
      )}
    </div>
  </header>
);

export default Header;
