/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles.scss';
import ImageUploader from 'react-images-upload';
import {
  errorMessage,
  handleDate,
  handlePicture,
  toastNotification,
} from 'src/selectors/carnetDeVoyage';
import FormInput from '../FormInput';

const FormTravel = ({ changeFieldCreateTravel, saveDateCreateTravel }) => {
  const handleDescriptionChange = (evt) => {
    changeFieldCreateTravel(evt.target.value, 'description');
  };

  const handleChangePicture = (evt) => {
    handlePicture(evt, changeFieldCreateTravel);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    saveDateCreateTravel();
  };

  return (
    <div className="formTravel">
      <form action="" className="formTravel__form" onSubmit={handleSubmit}>
        <div className="formTravel__form--firstInput">
          <FormInput
            type="text"
            name="title"
            content="Titre"
            onChange={changeFieldCreateTravel}
          />
          <FormInput
            type="text"
            name="creation_date"
            content="Date (JJ/MM/AAAA)"
            onChange={changeFieldCreateTravel}
          />
        </div>

        <div className="floating-label formTravel__form--description">
          <textarea
            type="text"
            className="floating-input"
            name="description"
            placeholder=" "
            maxLength="255"
            rows="9"
            onChange={handleDescriptionChange}
          />
          <label htmlFor="description"> Description (255 caractères maximum) </label>
        </div>

        <div className="formTravel__form--picture">
          <ImageUploader
            withIcon
            onChange={handleChangePicture}
            imgExtension={['.jpg', '.png', '.jpeg']}
            maxFileSize={5242880}
            withPreview
            singleImage
          />
        </div>

        <div className="formTravel__form--div">
          <input className="formTravel__submit" type="submit" value="Enregistrer mon nouveau voyage" />
        </div>

      </form>
    </div>
  );
};

export default FormTravel;
