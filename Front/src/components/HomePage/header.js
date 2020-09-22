/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import Menu from '../Menu';
import MenuDesktop from '../MenuDesktop';
import './styles.scss';

const Header = () => (
  <header className="headerHomePage">
    <div clcassName="headerHomePage__mobile">
      <NavLink
        to="/login"
        exact
      >
        <Button text="Connexion" />
      </NavLink>
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
