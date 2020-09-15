import React from 'react';
import MenuDesktop from 'src/components/MenuDesktop';
import FormUpdateStep from 'src/containers/formUpdateStep';
import './styles.scss';

const UpdateStep = () => (
  <div className="UpdateStep">
    <MenuDesktop />
    <h2 className="createStep__title">Voyage au Pérou</h2>
    <span className="createStep__span">Modifier l'étape 1</span>
    <FormUpdateStep />
  </div>
);

export default UpdateStep;
