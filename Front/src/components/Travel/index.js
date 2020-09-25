import React from 'react';
import MenuDesktop from 'src/components/MenuDesktop';
import MenuBurger from 'src/components/MenuBurger';
import Cookies from 'js-cookie';
import './styles.scss';
import TravelPage from 'src/containers/travel';

const Travel = () => (
  <div className="travel">
    {Cookies.get('loggedIn') && (
      <>
        <MenuBurger />
        <MenuDesktop />
      </>
    )}
    <TravelPage />
  </div>
);

export default Travel;
