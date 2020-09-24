import React, { useEffect } from 'react';
import ImageUploader from 'react-images-upload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import {
  faTimes, faPaperPlane, faPlaneArrival, faSpinner, faArrowCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import {
  useParams, useHistory, Redirect, Link,
} from 'react-router-dom';
import Spinner from 'src/components/Spinner';
import {
  handlePicture, errorMessage, handleDate, toastNotification,
} from 'src/selectors/carnetDeVoyage';
import { useToasts } from 'react-toast-notifications';

import Toggle from 'react-toggle';
import Modal from 'react-modal';
import FormInput from '../FormInput';
import './styles.scss';

Modal.setAppElement('#root');

const FormUpdateTravel = ({
  fetchDataForUpdateTravel,
  title,
  loading,
  creation_date,
  description,
  picture_url,
  changeDateForUpdateTravel,
  status,
  sendDataForUpdateTravel,
  response,
  deleteTravel,
  unthorizedResponse,
}) => {
  const { id } = useParams();
  const { addToast } = useToasts();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const history = useHistory();

  const toastFailOrSuccess = () => {
    const messageSuccess = 'Votre voyage a bien été modifié !';
    const destination = `/travel/${id}`;
    toastNotification(addToast, history, response, messageSuccess, destination);
  };

  useEffect(() => {
    toastFailOrSuccess();
  }, [response]);

  useEffect(() => {
    changeDateForUpdateTravel(id, 'id');
    fetchDataForUpdateTravel();
  }, []);

  const handleDescription = (evt) => {
    changeDateForUpdateTravel(evt.target.value, 'description');
  };

  const removePictureFromDom = () => {
    const imgElement = document.querySelector('.picturediv_updateTravel');
    if (imgElement) {
      imgElement.remove();
    }
  };

  const handleChangePicture = (evt) => {
    handlePicture(evt, changeDateForUpdateTravel);
    removePictureFromDom();
  };

  const handleRemovePicture = () => {
    changeDateForUpdateTravel('', 'picture');
    removePictureFromDom();
  };

  const handleToggleChange = () => {
    changeDateForUpdateTravel(!status, 'status');
  };

  const travelStatus = () => {
    if (status) {
      return 'Voyage terminé';
    }
    return 'Voyage en cours';
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const allDataForRegister = [title, description, creation_date, picture_url];
    const isEmptyElement = allDataForRegister.includes('');
    const submitElt = '.errorDivUpdateTravel';

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
      const divElement = document.querySelector('.submit__loading');
      sendDataForUpdateTravel();
      divElement.style.display = 'flex';
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDeleteTravel = () => {
    deleteTravel(id);
    location.replace('/');
  };

  return (
    <div className="formUpdateTravel">
      {loading && (
        <Spinner />
      )}
      {!loading && (
        <div className="formTravel">
          <Link to={`/travel/${id}`} className="travelPage__header--return">
            <FontAwesomeIcon icon={faArrowCircleLeft} />
            <p>Revenir au voyage</p>
          </Link>
          <h2 className="createTravel__title formUpdateTravel__title">Modifier mon Voyage</h2>
          <form action="" className="formTravel__form" onSubmit={handleSubmit}>
            <div className="formTravel__form--firstInput">
              <FormInput
                type="text"
                name="title"
                content="Titre"
                onChange={changeDateForUpdateTravel}
                value={title}
              />
              <FormInput
                type="text"
                name="creation_date"
                content="Date (JJ/MM/AAAA)"
                onChange={changeDateForUpdateTravel}
                value={creation_date}
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
                onChange={handleDescription}
                value={description}
              />
              <label htmlFor="description"> Description (255 caractères maximum) </label>
            </div>

            <div className="FormUpdateStep__formElt--pictures picturediv_updateTravel">
              <img className="picture_updateTravel" src={`http://34.239.44.174/uploads/pictures/${picture_url}`} alt="pictureTravel" />
              <FontAwesomeIcon icon={faTimes} className="pictures__icon" onClick={handleRemovePicture} />
            </div>

            <div className="formTravel__form--picture">
              <ImageUploader
                withIcon
                onChange={handleChangePicture}
                imgExtension={['.jpg', '.png', '.jpeg']}
                maxFileSize={5242880}
                withPreview
                singleImage
                label="Taille max: 5mb, jpeg, jpg, png"
                buttonText="Choisir une autre photo"
              />
            </div>

            <div className="formUpdateTravel__toggle">
              <Toggle
                defaultChecked={!status}
                icons={{
                  checked: <FontAwesomeIcon color="white" icon={faPaperPlane} size="xs" />,
                  unchecked: <FontAwesomeIcon color="white" icon={faPlaneArrival} size="xs" />,
                }}
                onChange={handleToggleChange}
              />
              <span className="formUpdateTravel__toggle--span">{travelStatus()}</span>
            </div>

            <div className="formTravel__form--div">
              <div className="submit__loading submit_create_travel">
                <FontAwesomeIcon icon={faSpinner} spin />
              </div>
              <input className="formTravel__submit" type="submit" value="Enregistrer mon voyage" />
            </div>

            <div className="formTravel__form--div">
              <input className="formTravel__submit updateTravelDelete" type="button" value="Supprimer mon voyage" onClick={openModal} />
            </div>

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
                <h2 className="modalEx__content--title">Êtes vous sur de vouloir supprimer ce voyage ?</h2>
                <button className="modalEx__content--delete" onClick={handleDeleteTravel}>Supprimer</button>
                <button className="modalEx__content--close" onClick={closeModal}>Annuler</button>
              </div>
            </Modal>

            <div className="errorDivUpdateTravel" />

          </form>
        </div>
      )}
      {!unthorizedResponse && (
        <Redirect to="/" />
      )}
    </div>
  );
};

FormUpdateTravel.propTypes = {
  fetchDataForUpdateTravel: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  creation_date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture_url: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  changeDateForUpdateTravel: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
  sendDataForUpdateTravel: PropTypes.func.isRequired,
  response: PropTypes.string.isRequired,
  deleteTravel: PropTypes.func.isRequired,
  unthorizedResponse: PropTypes.bool.isRequired,
};

FormUpdateTravel.defaultProps = {
  picture_url: [],
};

export default FormUpdateTravel;
