/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import Map from 'src/components/Map';
import FormInput from 'src/components/FormInput';
import { useParams } from 'react-router-dom';
import Spinner from 'src/components/Spinner';
import {
  handlePicture,
} from 'src/selectors/carnetDeVoyage';

import ImageUploader from 'react-images-upload';
import './styles.scss';
import Picture from './picture';

const FormUpdateStep = ({
  fetchDataStep,
  title,
  description,
  latitude,
  longitude,
  step_date,
  picture,
  changeDataStep,
  loading,
  deletePictureUpdate,
  savePictureUpdate,
  sendDateUpdate,
}) => {
  const { id, type } = useParams();
  useEffect(() => {
    changeDataStep(id, 'id');
    changeDataStep(type, 'type');
    fetchDataStep();
  }, []);

  console.log('dalut', picture);

  const imgElement = () => picture.map(
    (elt) => (
      <Picture
        key={elt.url}
        src={elt.data}
        url={elt.url}
        onDelete={deletePictureUpdate}
      />
    ),
  );

  const changeValueTextArea = (evt) => {
    console.log(evt.target.value);
    changeDataStep(evt.target.value, 'description');
  };

  const handleChangePicture = (evt) => {
    handlePicture(evt, savePictureUpdate);
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    sendDateUpdate();
  };

  return (

    <div className="FormUpdateStep">
      {loading && (
      <Spinner />
      )}
      {!loading
        && (
        <form action="" className="FormUpdateStep__formElt" onSubmit={handleOnSubmit}>

          <Map onChange={changeDataStep} latitude={latitude} longitude={longitude} />

          <div className="formStep__element--allInput FormUpdateStep__formElt--allInput">
            <div className="FormUpdateStep__formElt--allInput">
              <FormInput
                type="text"
                name="title"
                content="Titre"
                onChange={changeDataStep}
                value={title}
              />

              <div className="floating-label">
                <textarea type="text" className="floating-input" name="description" placeholder=" " maxLength="255" rows="9" value={description} onChange={changeValueTextArea} />
                <label htmlFor="description"> Description (255 caractères maximum) </label>
              </div>

              <FormInput
                type="text"
                name="step_date"
                content="Date (JJ/MM/AAAA)"
                onChange={changeDataStep}
                value={step_date}
              />
            </div>

            <div className="FormUpdateStep__formElt--pictures">
              {imgElement()}
            </div>
            <div className="essai">
              <ImageUploader
                withIcon
                imgExtension={['.jpg', '.png', '.jpeg']}
                maxFileSize={5242880}
                onChange={handleChangePicture}
                label="Max file size: 5mb, accepted: jpg, png"
                buttonText="Selectionner"
                withPreview
                className="essai"
              />
            </div>

            <div className="FormUpdateStep__formElt--finalInput">
              <input className="formStep__element--submit FormUpdateStep__submit" type="submit" value="Enregistrer l'étape" />
              <input className="formStep__element--submit FormUpdateStep__delete" type="button" value="Supprimer l'étape" />
            </div>
          </div>

        </form>
        )}

    </div>
  );
};

export default FormUpdateStep;
