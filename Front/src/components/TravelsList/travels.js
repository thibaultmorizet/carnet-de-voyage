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

          {travelsInProgress.length + travelsDone.length !== 0 && (
            <>
              <div className="travels__inProgress">
                <h2 className="travels__container--title"> Voyages en cours </h2>
                <div className="travels__allTravels">

                  {travelsInProgress.length !== 0 && (
                  <>
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

                  </>
                  )}

                  {travelsInProgress.length === 0 && (
                  <div>
                    <h4 className="notTravelsDone">Vous n'avez pas encore de voyage en cours, n'hésitez pas à en ajouter :)</h4>
                  </div>
                  )}

                </div>
              </div>

              <div className="travels__finish">
                <h2 className="travels__container--title"> Voyages terminés </h2>
                <div className="travels__allTravels">
                  {travelsDone.length !== 0 && (
                  <>
                    {travelsDone.map((elt) => (

                      <CardTravel
                        key={elt.id}
                        title={elt.title}
                        description={elt.description}
                        image={elt.pictureUrl}
                        url={elt.id}
                        onClick={deleteTravel}
                      />

                    ))}
                  </>
                  )}

                  {travelsDone.length === 0 && (
                  <div>
                    <h4 className="notTravelsDone">Vous n'avez pas encore fini de voyager, prenez votre temps et profiter de chaque minute</h4>
                  </div>
                  )}
                </div>
              </div>
            </>
          )}

          {travelsInProgress.length === 0 && travelsDone.length === 0 && (
            <div>
              <h4 className="notTravelsDone">Vous n'avez pas aucun voyage, n'hésitez pas à en ajouter :)</h4>
            </div>
          )}

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
  deleteTravel: PropTypes.func.isRequired,
};

export default Container;
