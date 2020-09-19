import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Menu from '../Menu';
import './styles.scss';

const Header = () => (
  <header className="headerHomePage">
    <div className="headerHomePage__mobile">
      <Link to="/login">
        <Button text="Connexion" />
      </Link>
    </div>
    <div className="headerHomePage__desktop">
      <Menu />
    </div>
  </header>
);

export default Header;
