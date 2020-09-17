import React from 'react';
import MenuDesktop from 'src/components/MenuDesktop';
import './styles.scss';
import TravelPage from 'src/containers/travel';

const Travel = () => (
  <div className="travel">
    <MenuDesktop />
    <TravelPage />
  </div>
);

export default Travel;
