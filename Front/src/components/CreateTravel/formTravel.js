/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import './styles.scss';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';
import ImageUploader from 'react-images-upload';
import {
  errorMessage,
  handleDate,
  handlePicture,
  toastNotification,
} from 'src/selectors/carnetDeVoyage';
import FormInput from '../FormInput';

const FormTravel = ({
  changeFieldCreateTravel, saveDateCreateTravel, title, description, creation_date, picture_url, response,
}) => {
  const { addToast } = useToasts();
  const history = useHistory();
  const toastFailOrSuccess = () => {
    toastNotification(addToast, history, response);
  };

  useEffect(() => {
    toastFailOrSuccess();
  }, [response]);

  const handleDescriptionChange = (evt) => {
    changeFieldCreateTravel(evt.target.value, 'description');
  };

  const handleChangePicture = (evt) => {
    handlePicture(evt, changeFieldCreateTravel);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const allDataForRegister = [title, description, creation_date, picture_url];
    const isEmptyElement = allDataForRegister.includes('');
    const submitElt = '.formTravel__form--div';

    if (isEmptyElement === true) {
      const message = 'Veuillez remplir tous les champs';
      errorMessage(message, submitElt);
    }
    else if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(creation_date)) {
      const message = 'Veuillez rentrer une date au format JJ/MM/AAAA';
      errorMessage(message, submitElt);
    }
    else if (handleDate(creation_date) === false) {
      const message = 'Veuillez rentrer une date correcte';
      errorMessage(message, submitElt);
    }
    else {
      saveDateCreateTravel();
    }
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
