import React from 'react';
import Title from './travels';
import './styles.scss';
import Footer from '../Footer';
import MenuDesktop from '../MenuDesktop';

const TravelsList = () => (

  <div className="travelsList">
    <MenuDesktop />
    <Title />
    <Footer />
  </div>
);

export default TravelsList;
