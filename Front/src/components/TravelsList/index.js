import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import Title from '../../containers/travelsList';
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
