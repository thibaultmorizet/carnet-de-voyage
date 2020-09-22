/* eslint-disable new-cap */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Link, useParams, useHistory, Redirect,
} from 'react-router-dom';
import Spinner from 'src/components/Spinner';
import { changeDateFormat, addImage } from 'src/selectors/carnetDeVoyage';
import Comments from 'src/containers/comment';
import Map from 'src/containers/mapShowTravel';
import './styles.scss';

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
}) => {
  const { id } = useParams();
  const history = useHistory();

  console.log('stepPremierePage', step);

  useEffect(() => {
    fetchDataForSingleTravel(id);
  }, []);

  useEffect(() => {
    addImage(currentPicture);
  }, [currentPicture]);

  return (
    <div className="travelPage">
      {loading && (
      <Spinner />
      )}
      {!loading && step.length !== 0 && (
        <>
          <div className="travelPage__header">
            <Link to="/travels/list" className="travelPage__header--return">
              <FontAwesomeIcon icon={faArrowCircleLeft} />
              <p>Revenir</p>
            </Link>

            <h2 className="travelPage__header--title">{travel.title}</h2>
            <a href={`/travel/${id}/update`}>
              <FontAwesomeIcon className="travelPage__header--icon" icon={faPen} />
            </a>

            <p className="travelPage__header--date"> {changeDateFormat(travel.creation_date)} </p>
            <p className="travelPage__header--description">{travel.description}
            </p>
            <a href={`/travel/${id}/add`}>
              <input type="button" className="travelPage__header--addStep" value="Ajouter une étape" />
            </a>
          </div>
          <div id="travelPage__map" />
          <Map onClickStep={saveDataForSingleStep} />

          <div className="travelPage__content">
            <h3 className="travelPage__content--title">{title}</h3>
            <p className="travelPage__content--excerpt">{description}</p>
            <div className="travelPage__content--images"> </div>

            <div className="travelPage__content--updateDiv"><a href={`/travel/${id}/update/${currentId}`} className="travelPage__content--updateStep"> Modifer cette étape </a></div>

            <Comments like={like} />

          </div>
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
};

TravelPage.defaultProps = {
  currentPicture: null,
  currentId: 0,
};

export default TravelPage;
