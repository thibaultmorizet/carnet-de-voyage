import React from 'react';
import Title from './travels';
import './styles.scss';
import MenuBurger from '../MenuBurger';
import MenuDesktop from '../MenuDesktop';

const TravelsList = () => (

  <div className="travelsList">
    <MenuDesktop />
    <MenuBurger />
    <Title />
  </div>
);

export default TravelsList;
