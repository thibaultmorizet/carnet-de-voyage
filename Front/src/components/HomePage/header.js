import React from 'react';
import Button from '../Button';
import Menu from '../Menu';
import './styles.scss';

const Header = () => (
  <header className="headerHomePage">
    <div className="headerHomePage__mobile">
      <Button text="Connexion" />
    </div>
    <div className="headerHomePage__desktop">
      <Menu />
    </div>

  </header>
);

export default Header;
