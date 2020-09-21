import React from 'react';
import FormUpdateTravel from 'src/containers/updateTravel';
import MenuDesktop from '../MenuDesktop';
import MenuBurger from '../MenuBurger';
import './styles.scss';

const UpdateTravel = () => (
  <div className="updateTravel">
    <MenuBurger />
    <MenuDesktop />
    <FormUpdateTravel />
  </div>
);

export default UpdateTravel;
