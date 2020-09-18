/* eslint-disable new-cap */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import L from 'leaflet';
import Spinner from 'src/components/Spinner';
import { changeDateFormat } from 'src/selectors/carnetDeVoyage';
import Map from './map';
import Comments from './comments';
import './styles.scss';

const TravelPage = ({
  travel, step, fetchDataForSingleTravel, loading, saveDataForSingleStep, title,
}) => {
  console.log('loadin', loading);

  useEffect(() => {
    fetchDataForSingleTravel();
  }, []);

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
            <p className="travelPage__content--excerpt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate exercitationem suscipit, labore neque ea aut aperiam officiis. Porro error neque impedit corrupti quo iusto non nisi vero officiis odit? Suscipit!</p>
            <Comments />
          </div>
        </>
      )}
    </div>
  );
};

export default TravelPage;
