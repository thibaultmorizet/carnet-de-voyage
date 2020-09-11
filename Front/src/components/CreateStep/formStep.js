/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import FormInput from 'src/components/FormInput';
import Map from 'src/components/CreateStep/map';
import { fileChangedHandler } from 'src/selectors/carnetDeVoyage';
import FileUploader from './fileButton';
import './styles.scss';

const FormStep = () => (
  <div className="formStep">

    <form action="" className="formStep__element">
      <Map />

      <div className="formStep__element--allInput">
        <FormInput
          type="text"
          name="title"
          content="Titre"
          onChange={() => console.log('coucou')}
        />

        <div className="floating-label">
          <textarea className="floating-input" name="description" placeholder=" " rows="9" />
          <label htmlFor="description"> Description (255 caractères maximum) </label>
        </div>

        <FormInput
          type="text"
          name="date"
          content="Date (JJ/MM/AAAA)"
          onChange={() => console.log('coucou')}
        />

        <FileUploader />

        <input className="formStep__element--submit" type="submit" value="Enregistrer l'étape" />
      </div>

    </form>
  </div>
);

export default FormStep;
