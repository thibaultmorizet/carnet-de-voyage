/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import FormInput from 'src/components/FormInput';
import Map from 'src/components/CreateStep/map';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { errorMessage, handleDate, emptyElement } from 'src/selectors/carnetDeVoyage';
import { useToasts } from 'react-toast-notifications';
import ImageUploader from 'react-images-upload';
import FileUploader from './fileButton';
import './styles.scss';

const FormStep = ({
  title,
  description,
  latitude,
  longitude,
  step_date,
  changeField,
  handleSubmit,
}) => {
  const { addToast } = useToasts();
  const { id } = useParams();
  const handleChange = (evt) => {
    changeField(evt.target.value, 'description');
  };

  function getBase64(file, onLoadCallback) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  const handleForm = (evt) => {
    evt.preventDefault();
    const allDataForRegister = [title, description, latitude, longitude, step_date];
    const submitElt = '.divElement_form';

    if (emptyElement(allDataForRegister) === true) {
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

  const handlePicture = (evt) => {
    if (evt[0]) {
      const promise = getBase64(evt[0]);
      promise.then((result) => {
        const elementWanted = result;
        const { name } = evt[0];
        const array = {
          url: name,
          data: elementWanted,
        };
        changeField(array, 'picture');
      });
    }
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

          {/* <FileUploader onChange={changeField} /> */}
          <ImageUploader
            withIcon
            onChange={handlePicture}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
            withPreview
            singleImage
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
};

export default FormStep;
