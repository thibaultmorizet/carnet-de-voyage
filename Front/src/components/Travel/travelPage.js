import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const TravelPage = () => (
  <div className="travelPage">
    <div className="travelPage__header">
      <h2 className="travelPage__header--title">Voyage au pérou</h2>
      <FontAwesomeIcon className="travelPage__header--icon" icon={faPen} />
      <button type="button" className="travelPage__header--follow">Suivre</button>
    </div>
  </div>
);

export default TravelPage;
