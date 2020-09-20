/* eslint-disable new-cap */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import Spinner from 'src/components/Spinner';
import { changeDateFormat, addImage } from 'src/selectors/carnetDeVoyage';
import Comments from 'src/containers/comment';
import Map from './map';
import './styles.scss';

const TravelPage = ({
  travel, step, fetchDataForSingleTravel, loading, saveDataForSingleStep, title, currentPicture, like, description,
}) => {
  const { id } = useParams();

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
      {!loading && (
        <>
          <div className="travelPage__header">
            <h2 className="travelPage__header--title">{travel.title}</h2>
            <Link to={`/travel/${id}/update`}>
              <FontAwesomeIcon className="travelPage__header--icon" icon={faPen} />
            </Link>

            <p className="travelPage__header--date"> {changeDateFormat(travel.creation_date)} </p>
            <p className="travelPage__header--description">{travel.description}
            </p>
          </div>
          <div id="travelPage__map" />
          <Map step={step} onClickStep={saveDataForSingleStep} />

          <div className="travelPage__content">
            <h3 className="travelPage__content--title">{title}</h3>
            <p className="travelPage__content--excerpt">{description}</p>
            <div className="travelPage__content--images"> </div>
            <Comments like={like} />

          </div>
        </>
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
};

TravelPage.defaultProps = {
  currentPicture: null,
};

export default TravelPage;
