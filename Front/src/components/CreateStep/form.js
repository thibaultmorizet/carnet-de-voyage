/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import FormInput from 'src/components/FormInput';
import Map from 'src/components/CreateStep/map';
import './styles.scss';

const Form = () => (
  <div className="form">
    <form action="" className="form__element">

      <Map />

      <FormInput
        type="text"
        name="search"
        content="Rechercher une ville"
        onChange={() => console.log('coucou')}
      />

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

      <input className="form__element--submit" type="submit" value="Enregistrer l'étape" />

    </form>
  </div>
);

export default Form;
