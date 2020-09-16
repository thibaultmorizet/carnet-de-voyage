/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import Map from 'src/components/Map';
import FormInput from 'src/components/FormInput';
import { useParams, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import Spinner from 'src/components/Spinner';
import {
  handlePicture, toastNotification,
} from 'src/selectors/carnetDeVoyage';
import Modal from 'react-modal';

import ImageUploader from 'react-images-upload';
import './styles.scss';
import Picture from './picture';

Modal.setAppElement('#root');

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
  deleteStep,
  response,
}) => {
  const { id, type } = useParams();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { addToast } = useToasts();
  const history = useHistory();

  useEffect(() => {
    changeDataStep(id, 'id');
    changeDataStep(type, 'type');
    fetchDataStep();
  }, []);

  const toastFailOrSuccess = () => {
    toastNotification(addToast, history, response);
  };

  useEffect(() => {
    toastFailOrSuccess();
  }, [response]);

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

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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

            <div className="FormUpdateStep__formElt--finalInput" id="roro">
              <input className="formStep__element--submit FormUpdateStep__submit" type="submit" value="Enregistrer l'étape" />
              <input className="formStep__element--submit FormUpdateStep__delete" type="button" value="Supprimer l'étape" onClick={openModal} />
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="modalEx"
                style={{
                  overlay: {
                    backdropFilter: 'blur(5px)',
                  },
                }}
              >
                <div className="modalEx__content">
                  <h2 className="modalEx__content--title">Êtes vous sur de vouloir supprimer cette étape ?</h2>
                  <button className="modalEx__content--delete" onClick={deleteStep}>Supprimer</button>
                  <button className="modalEx__content--close" onClick={closeModal}>Annuler</button>
                </div>
              </Modal>
            </div>
          </div>

        </form>
        )}

    </div>
  );
};

export default FormUpdateStep;

// /api/travel/{id}/delete/{id2}
