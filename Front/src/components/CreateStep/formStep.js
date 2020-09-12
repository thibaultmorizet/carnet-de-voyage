/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import FormInput from 'src/components/FormInput';
import Map from 'src/components/CreateStep/map';
import { fileChangedHandler } from 'src/selectors/carnetDeVoyage';
import FileUploader from './fileButton';
import './styles.scss';

const FormStep = ({ changeField, handleSubmit }) => {
  console.log(changeField);
  const handleChange = (evt) => {
    changeField(evt.target.value, 'description');
  };

  const handleForm = (evt) => {
    evt.preventDefault();
    handleSubmit();
  };
  return (
    <div className="formStep">

      <form action="" className="formStep__element" onSubmit={handleForm}>
        <Map onChange={changeField} />

        <div className="formStep__element--allInput">
          <FormInput
            type="text"
            name="title"
            content="Titre"
            onChange={changeField}
          />

          <div className="floating-label">
            <textarea type="text" className="floating-input" name="description" placeholder=" " rows="9" onChange={handleChange} />
            <label htmlFor="description"> Description (255 caractères maximum) </label>
          </div>

          <FormInput
            type="text"
            name="step_date"
            content="Date (JJ/MM/AAAA)"
            onChange={changeField}
          />

          <FileUploader />

          <input className="formStep__element--submit" type="submit" value="Enregistrer l'étape" />
        </div>

      </form>
    </div>
  );
};

export default FormStep;
