/* eslint-disable new-cap */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import L from 'leaflet';
import Spinner from 'src/components/Spinner';
import { changeDateFormat, addImage } from 'src/selectors/carnetDeVoyage';
import Comments from 'src/containers/comment';
import Map from './map';
import './styles.scss';

const TravelPage = ({
  travel, step, fetchDataForSingleTravel, loading, saveDataForSingleStep, title, currentPicture, like, description,
}) => {
  console.log('loadin', step);

  useEffect(() => {
    fetchDataForSingleTravel();
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
            <FontAwesomeIcon className="travelPage__header--icon" icon={faPen} />
            <p> {changeDateFormat(travel.creation_date)} </p>
            <p>{travel.description}
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

export default TravelPage;
