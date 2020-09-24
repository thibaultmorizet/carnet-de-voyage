/* eslint-disable no-dupe-keys */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import FormInput from 'src/components/FormInput';
import Map from 'src/components/Map';
import PropTypes from 'prop-types';
import {
  useParams, Link,
} from 'react-router-dom';
import {
  errorMessage,
  handleDate,
  handlePicture,
} from 'src/selectors/carnetDeVoyage';
import { useToasts } from 'react-toast-notifications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
import ImageUploader from 'react-images-upload';
import './styles.scss';

const FormStep = ({
  title,
  description,
  latitude,
  longitude,
  picture,
  step_date,
  response,
  changeField,
  handleSubmit,
  changePicture,
}) => {
  const { addToast } = useToasts();
  const { id } = useParams();
  const [count, setCount] = useState(0);

  const handleChange = (evt) => {
    changeField(evt.target.value, 'description');
  };

  const toastFailOrSuccess = () => {
    if (count === 1) {
      if (response === 'Error') {
        addToast('Une erreur s\'est produite. Veuillez réessayer plus tard', {
          appearance: 'error',
          autoDismiss: true,
        });
      }
      else if (response === 'Success') {
        const message = 'Votre étape a bien été crée. Votre voyage se passe bien ? :)';
        addToast(message, {
          appearance: 'success',
          autoDismiss: true,
          autoDismissTimeout: '2000',
        });
        location.replace(`/travel/${id}`);
      }
    }
  };

  useEffect(() => {
    toastFailOrSuccess();
  }, [response]);

  const handleForm = (evt) => {
    evt.preventDefault();
    const allDataForRegister = [title, description, latitude, longitude, step_date, picture];
    const isEmptyElement = allDataForRegister.includes('');
    const submitElt = '.divElement_form';

    if (isEmptyElement === true || latitude === 0 || longitude === 0) {
      const message = 'Veuillez remplir tous les champs';
      errorMessage(message, submitElt);
    }
    else if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(step_date)) {
      const message = 'Veuillez rentrer une date au format JJ/MM/AAAA';
      errorMessage(message, submitElt);
    }
    else if (handleDate(step_date) === false) {
      const message = 'Veuillez rentrer une date correcte';
      errorMessage(message, submitElt);
    }
    else {
      changeField(id, 'travel_id');
      const loadingElement = document.querySelector('.submit__loading');
      loadingElement.style.display = 'flex';
      handleSubmit();
    }
  };

  const handleChangePicture = (evt) => {
    handlePicture(evt, changePicture);
  };

  return (
    <div className="formStep">

      <Link to={`/travel/${id}`} className="travelPage__header--return">
        <FontAwesomeIcon icon={faArrowCircleLeft} />
        <p>Revenir au voyage</p>
      </Link>

      <form action="" className="formStep__element" onSubmit={handleForm}>
        <Map onChange={changeField} latitude={48.873126} longitude={2.316808} />

        <div className="formStep__element--allInput">
          <FormInput
            type="text"
            name="title"
            content="Titre"
            onChange={changeField}
          />

          <div className="floating-label">
            <textarea type="text" className="floating-input" name="description" placeholder=" " maxLength="255" rows="9" onChange={handleChange} />
            <label htmlFor="description"> Description (255 caractères maximum) </label>
          </div>

          <FormInput
            type="text"
            name="step_date"
            content="Date (JJ/MM/AAAA)"
            onChange={changeField}
          />

          <div className="essai">
            <ImageUploader
              withIcon
              onChange={handleChangePicture}
              imgExtension={['.jpg', '.png', '.jpeg']}
              label="Max file size: 5mb, accepted: jpeg, jpg, png"
              maxFileSize={5242880}
              withPreview
            />
          </div>

          <div className="divElement_form">
            <div className="submit__loading">
              <FontAwesomeIcon icon={faSpinner} spin />
            </div>
            <input className="formStep__element--submit" type="submit" value="Enregistrer l'étape" onClick={() => setCount(1)} />
          </div>

        </div>

      </form>
    </div>
  );
};

FormStep.propTypes = {
  changeField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  step_date: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  step_date: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
  changePicture: PropTypes.func.isRequired,
  picture: PropTypes.string.isRequired,
};

export default FormStep;
