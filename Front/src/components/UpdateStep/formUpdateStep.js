/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import Map from 'src/components/Map';
import FormInput from 'src/components/FormInput';
import {
  useParams, useHistory, Link, Redirect,
} from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Spinner from 'src/components/Spinner';
import { handlePicture, toastNotification } from 'src/selectors/carnetDeVoyage';
import Modal from 'react-modal';
import ImageUploader from 'react-images-upload';
import PropTypes from 'prop-types';
import Picture from './picture';

import './styles.scss';

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
  unthorizedResponse,
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
    const messageSuccess = 'Votre étape a bien été modifiée';
    const destination = `/travel/${id}`;
    toastNotification(addToast, history, response, messageSuccess, destination);
  };

  useEffect(() => {
    toastFailOrSuccess();
  }, [response]);

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
    changeDataStep(evt.target.value, 'description');
  };

  const handleChangePicture = (evt) => {
    handlePicture(evt, savePictureUpdate);
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    sendDateUpdate();
    const divElement = document.querySelector('.submit__loading');
    divElement.style.display = 'flex';
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Link to={`/travel/${id}`} className="travelPage__header--return updatePageReturn">
        <FontAwesomeIcon icon={faArrowCircleLeft} />
        <p>Revenir au voyage</p>
      </Link>
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
                label="Max file size: 5mb, accepted: jpeg, jpg, png"
                buttonText="Choisir"
                withPreview
                className="essai"
              />
            </div>

            <div className="FormUpdateStep__formElt--finalInput" id="roro">
              <div className="submit__loading submit_update_travel">
                <FontAwesomeIcon icon={faSpinner} spin />
              </div>
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

        {!unthorizedResponse && (
        <Redirect to="/" />
        )}
      </div>
    </>
  );
};

FormUpdateStep.propTypes = {
  fetchDataStep: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  step_date: PropTypes.string.isRequired,
  picture: PropTypes.array,
  changeDataStep: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  deletePictureUpdate: PropTypes.func.isRequired,
  savePictureUpdate: PropTypes.func.isRequired,
  sendDateUpdate: PropTypes.func.isRequired,
  deleteStep: PropTypes.func.isRequired,
  response: PropTypes.string,
  unthorizedResponse: PropTypes.bool.isRequired,
};

FormUpdateStep.defaultProps = {
  picture: [],
  response: '',
};

export default FormUpdateStep;
