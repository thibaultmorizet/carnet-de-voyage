import React, { useEffect } from 'react';
import Spinner from 'src/components/Spinner';
import './styles.scss';
import CardTravel from './card';

import img1 from '../../assets/images/background-machu.jpg';

const Container = ({
  fetchDataTravelsList,
  travelsInProgress,
  travelsDone,
  loading,
}) => {
  useEffect(() => {
    fetchDataTravelsList();
  }, []);

  console.log('travel', travelsInProgress);

  const travelsInProgressAddPage = () => {
    console.log('trotot', travelsInProgress);
  };

  console.log('load', loading);

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

export default Container;
