import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import Menu from '../Menu';
import './styles.scss';

const Header = () => (
  <header className="headerHomePage">
    <div className="headerHomePage__mobile">
      <NavLink
        to="/login"
        exact
      >
        <Button text="Connexion" />
      </NavLink>
    </div>
    <div className="headerHomePage__desktop">
      <Menu />
    </div>
  </header>
);

export default Header;
