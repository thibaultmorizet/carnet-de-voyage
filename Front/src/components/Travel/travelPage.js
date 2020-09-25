/* eslint-disable no-new */
/* eslint-disable new-cap */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Link, useParams, useHistory, Redirect,
} from 'react-router-dom';
import Clipboard from 'clipboard';
import Spinner from 'src/components/Spinner';
import { changeDateFormat, addImage } from 'src/selectors/carnetDeVoyage';
import Comments from 'src/containers/comment';
import Map from 'src/containers/mapShowTravel';

import Modal from 'react-modal';

import './styles.scss';

Modal.setAppElement('#root');

const TravelPage = ({
  travel,
  step,
  fetchDataForSingleTravel,
  loading,
  saveDataForSingleStep,
  title,
  currentPicture,
  like,
  description,
  currentId,
  response,
  fetchDataForUrlShare,
}) => {
  const { id, type } = useParams();
  const history = useHistory();

  let countCopy = 0;

  const clipBoardCopy = () => {
    new Clipboard('#btnCopy');
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [actualPicture, setActualPicture] = useState('');

  useEffect(() => {
    fetchDataForSingleTravel(id, type);
    clipBoardCopy();
  }, []);

  useEffect(() => {
    addImage(currentPicture, openModal);
  }, [currentPicture]);

  const shareTravel = (evt) => {
    evt.target.remove();
    fetchDataForUrlShare(id);
  };

  const handleChangeCopy = (evt) => {
    countCopy += 1;
    if (countCopy === 10) {
      evt.target.value = 'Vraiment ?';
    }
    else if (countCopy === 20) {
      evt.target.value = 'Calm Down !';
    }
    else if (countCopy === 30) {
      evt.target.value = 'Put this mouse down !';
    }
    else if (countCopy === 40) {
      evt.target.value = 'Stop it and take my money !';
    }
    else if (countCopy === 50) {
      evt.target.value = 'You win, i\'m giving up...';
    }
    else if (countCopy === 100) {
      evt.target.value = 'No... how dare you';
    }
    else {
      evt.target.value = `Copié ${countCopy} !`;
    }

    setTimeout(() => {
      const inputElement = document.querySelector('.shareUrlCopy');
      inputElement.value = 'Copie moi !';
    }, 1000);
  };

  const openModal = (evt) => {
    console.log(evt.target.src);
    setIsOpen(true);
    setActualPicture(evt.target.src);
    console.log(actualPicture);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="travelPage">
      {loading && (
        <Spinner />
      )}
      {!loading && step.length !== 0 && (
        <>
          <div className="travelPage__header">
            {Cookies.get('loggedIn') && type === undefined && (
              <Link to="/travels/list" className="travelPage__header--return">
                <FontAwesomeIcon icon={faArrowCircleLeft} />
                <p>Revenir</p>
              </Link>
            )}

            <h2 className="travelPage__header--title">{travel.title}</h2>
            {Cookies.get('loggedIn') && type === undefined && (
              <a href={`/travel/${id}/update`}>
                <FontAwesomeIcon className="travelPage__header--icon" icon={faPen} />
              </a>
            )}

            <p className="travelPage__header--date"> {changeDateFormat(travel.creation_date)} </p>
            <p className="travelPage__header--description">{travel.description}
            </p>

            {Cookies.get('loggedIn') && type === undefined && (
              <a href={`/travel/${id}/add`}>
                <input type="button" className="travelPage__header--addStep" value="Ajouter une étape" />
              </a>
            )}

            {Cookies.get('loggedIn') && type === undefined && (
              <div className="travelPage__shareDiv">
                <input type="button" className="travelPage__header--addStep shareTravel" value="Créer un lien de partage" onClick={shareTravel} />
                <input type="button" id="btnCopy" className="shareUrlCopy" value="Copie moi" onClick={handleChangeCopy} data-clipboard-target="#copyMe" />
              </div>
            )}

          </div>
          <div id="travelPage__map" />
          <Map onClickStep={saveDataForSingleStep} />

          <div className="travelPage__content">
            <h3 className="travelPage__content--title">{title}</h3>
            <p className="travelPage__content--excerpt">{description}</p>
            <div className="travelPage__content--images"> </div>

            {Cookies.get('loggedIn') && type === undefined && (
              <div className="travelPage__content--updateDiv">
                <a href={`/travel/${id}/update/${currentId}`} className="travelPage__content--updateStep"> Modifier cette étape </a>
              </div>
            )}

            <Comments like={like} />

          </div>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            shouldFocusAfterRender={false}
            className="modalEx modelEx2"
            style={{
              overlay: {
                backdropFilter: 'blur(5px)',
              },
            }}
          >
            <div className="modalEx__content">
              <img className="modaxEx__content--picture" src={actualPicture} alt="lolo" />
            </div>
          </Modal>
        </>
      )}
      {!loading && step.length === 0 && (
        <Redirect to={`/travel/${id}/add`} />
      )}
      {!response && (
        <Redirect to="/" />
      )}
    </div>
  );
};

TravelPage.propTypes = {
  travel: PropTypes.object.isRequired,
  step: PropTypes.array.isRequired,
  fetchDataForSingleTravel: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  saveDataForSingleStep: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  currentPicture: PropTypes.array,
  like: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  currentId: PropTypes.number,
  response: PropTypes.bool.isRequired,
  fetchDataForUrlShare: PropTypes.func.isRequired,
};

TravelPage.defaultProps = {
  currentPicture: null,
  currentId: 0,
};

export default TravelPage;
