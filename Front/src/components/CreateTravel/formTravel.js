/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles.scss';
import ImageUploader from 'react-images-upload';
import FormInput from '../FormInput';

const FormTravel = () => (
  <div className="formTravel">
    <form action="" className="formTravel__form">
      <div className="formTravel__form--firstInput">
        <FormInput
          type="text"
          name="title"
          content="Titre"
          onChange={() => console.log('change')}
        />
        <FormInput
          type="text"
          name="date"
          content="Date (JJ/MM/AAAA)"
          onChange={() => console.log('change')}
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
          onChange={() => console.log('onChange')}
        />
        <label htmlFor="description"> Description (255 caractères maximum) </label>
      </div>

      <div className="formTravel__form--picture">
        <ImageUploader
          withIcon
          onChange={() => console.log('picture')}
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

export default FormTravel;
