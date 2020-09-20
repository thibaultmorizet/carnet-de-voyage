import React from 'react';
import './styles.scss';
import FormTravel from 'src/containers/createTravel';
import MenuDesktop from '../MenuDesktop';

const CreateTravel = () => (
  <div className="createTravel">
    <MenuDesktop />
    <h2 className="createTravel__title">Créer un nouveau voyage</h2>
    <FormTravel />
  </div>
);

export default CreateTravel;
