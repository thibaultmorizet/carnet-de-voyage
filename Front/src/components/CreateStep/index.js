import React from 'react';
import Menu from 'src/components/Menu';
import './styles.scss';

const CreateStep = () => (
  <div className="createStep">
    <Menu />
    <h2 className="createStep__title">Voyage au Pérou</h2>
    <span className="createStep__span">Ajouter une étape</span>
  </div>
);

export default CreateStep;
