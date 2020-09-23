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
          <input type="submit" name="travelsInput" className="travelsInput" value="Créer un nouveau voyage" />

          <div className="travels__inProgress">
            <h2 className="travels__container--title"> Voyages en cours </h2>
            <p className="travels--icon">˟</p>
            {travelsInProgress.map((elt) => (
              <CardTravel
                key={elt.id}
                title={elt.title}
                description={elt.description}
                image={elt.pictureUrl}
              />
            ))}
          </div>

          <div className="travels__finish">
            <h2 className="travels__container--title"> Voyages terminés </h2>
            <p className="travels--icon">˟</p>
            <img src={img1} alt="" />
            <div className="travels__commentary">
              <h3 className="commentary--title">Voyage au Pérou</h3>
              <p className="commentary--text">Trop bien, ça dure deux jours</p>
            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default Container;
