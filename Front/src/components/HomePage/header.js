import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Button from '../Button';
import Menu from '../Menu';
import './styles.scss';
import MenuDesktop from '../MenuDesktop';

const Header = () => (
  <header className="headerHomePage">
    <div className="headerHomePage__mobile">
      <Link to="/login">
        <Button text="Connexion" />
      </Link>
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
