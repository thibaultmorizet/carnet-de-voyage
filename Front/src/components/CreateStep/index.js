import React from 'react';
import Form from 'src/containers/createStep';
import MenuDesktop from '../MenuDesktop';
import MenuBurger from '../MenuBurger';

import './styles.scss';

const CreateStep = () => (
  <div className="createStep">
    <MenuBurger />
    <MenuDesktop />
    <h2 className="createStep__title">Votre Voyage</h2>
    <span className="createStep__span">Ajouter une étape</span>
    <Form />

  </div>
);

export default CreateStep;
