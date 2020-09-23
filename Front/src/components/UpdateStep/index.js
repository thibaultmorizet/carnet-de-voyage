import React from 'react';
import FormUpdateStep from 'src/containers/formUpdateStep';
import MenuBurger from '../MenuBurger';
import MenuDesktop from '../MenuDesktop';
import './styles.scss';

const UpdateStep = () => (
  <div className="UpdateStep">
    <MenuBurger />
    <MenuDesktop />
    <h2 className="createStep__title">Votre Voyage</h2>
    <span className="createStep__span">Modifier l'étape</span>
    <FormUpdateStep />
  </div>
);

export default UpdateStep;
