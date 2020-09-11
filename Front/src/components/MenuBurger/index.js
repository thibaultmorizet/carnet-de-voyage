import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './styles.scss';

const MenuBurger = () => (

  showSettings (event) = ( 
  event.preventDefault()
  )
    
    <div id = " external -container">
      <Menu pageWrapId = { "page-wrap" } externalContainerId = {  "outer-container"  }>
        <main id = "page-wrap">
          <a id="admin" className="menu-item" href="/admin/userlist">Administration</a>
          <a id="userId" className="menu-item" href="/user/{id}">Mon profil</a>
          <a id="travelsList" className="menu-item" href="/travels/list">Mes voyages</a>
          <a id="followTravelsList" className="menu-item" href="/travels/follow/list">Voyages suivis</a>
          <a id="disconnect" className="menu-item" href="/">Déconneion</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </main>
      </Menu>
    </div>
);

export default MenuBurger;
