/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import FormInput from 'src/components/FormInput';
import Map from 'src/components/CreateStep/map';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import {
  errorMessage,
  handleDate,
  handlePicture,
  toastNotification,
} from 'src/selectors/carnetDeVoyage';
import { useToasts } from 'react-toast-notifications';
import ImageUploader from 'react-images-upload';
import './styles.scss';

const FormStep = ({
  title,
  description,
  latitude,
  longitude,
  step_date,
  response,
  changeField,
  handleSubmit,
  changePicture,
}) => {
  const { addToast } = useToasts();
  const history = useHistory();
  const { id } = useParams();
  const handleChange = (evt) => {
    changeField(evt.target.value, 'description');
  };

  const toastFailOrSuccess = () => {
    toastNotification(addToast, history, response);
  };

  useEffect(() => {
    toastFailOrSuccess();
  }, [response]);

  const handleForm = (evt) => {
    evt.preventDefault();
    const allDataForRegister = [title, description, latitude, longitude, step_date];
    const isEmptyElement = allDataForRegister.includes('');
    const submitElt = '.divElement_form';

    if (isEmptyElement === true) {
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
      handleSubmit();
    }
  };

  const handleChangePicture = (evt) => {
    handlePicture(evt, changePicture);
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
            <textarea type="text" className="floating-input" name="description" placeholder=" " maxLength="255" rows="9" onChange={handleChange} />
            <label htmlFor="description"> Description (255 caractères maximum) </label>
          </div>

          <FormInput
            type="text"
            name="step_date"
            content="Date (JJ/MM/AAAA)"
            onChange={changeField}
          />

          <ImageUploader
            withIcon
            onChange={handleChangePicture}
            imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
            maxFileSize={5242880}
            withPreview
          />

          <div className="divElement_form">
            <input className="formStep__element--submit" type="submit" value="Enregistrer l'étape" />
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
};

export default FormStep;