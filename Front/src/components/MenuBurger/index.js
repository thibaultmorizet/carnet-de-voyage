/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './styles.scss';

class MenuBurger extends React.Component {
  render() {
    return (
      <Menu>
        <a id="admin" className="menu-item" href="/admin/userlist">Administration</a>
        <a id="userId" className="menu-item" href="/user/{id}">Mon profil</a>
        <a id="travelsList" className="menu-item" href="/travels/list">Mes voyages</a>
        <a id="followTravelsList" className="menu-item" href="/travels/follow/list">Voyages suivis</a>
        <a id="disconnect" className="menu-item" href="/">Déconnexion</a>
      </Menu>
    );
  }
}

export default MenuBurger;
