import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'src/components/Spinner';
import './styles.scss';
import CardTravel from './card';

const Container = ({
  fetchDataTravelsList,
  travelsInProgress,
  travelsDone,
  loading,
  deleteTravel,
}) => {
  useEffect(() => {
    fetchDataTravelsList();
  }, []);

  return (

    <div className="travels__container">
      {loading && (
      <Spinner />
      )}

      {!loading && (
        <>
          <a href="/travels/create">
            <input type="button" name="travelsInput" className="travelsInput" value="Créer un nouveau voyage" />
          </a>

          <div className="travels__inProgress">
            <h2 className="travels__container--title"> Voyages en cours </h2>
            <div className="travels__allTravels">
              {travelsInProgress.map((elt) => (
                <CardTravel
                  key={elt.id}
                  title={elt.title}
                  description={elt.description}
                  image={elt.pictureUrl}
                  url={elt.id}
                  onClick={deleteTravel}
                />
              ))}
            </div>
          </div>

          <div className="travels__finish">
            <h2 className="travels__container--title"> Voyages terminés </h2>
            <div className="travels__allTravels">
              {travelsDone.map((elt) => (
                <CardTravel
                  key={elt.id}
                  title={elt.title}
                  description={elt.description}
                  image={elt.pictureUrl}
                  url={elt.id}
                />
              ))}
            </div>
          </div>
        </>
      )}

    </div>
  );
};

Container.propTypes = {
  fetchDataTravelsList: PropTypes.func.isRequired,
  travelsInProgress: PropTypes.array.isRequired,
  travelsDone: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Container;
