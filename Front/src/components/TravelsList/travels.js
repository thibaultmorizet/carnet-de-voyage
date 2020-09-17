import React from 'react';
import './styles.scss';
import img1 from '../../assets/images/background-machu.jpg';

const Container = () => (
  <div className="travels__container">

    <input type="submit" name="travelsInput" id="travelsInput" value="Créer un nouveau voyage" />

    <div className="travels__inProgress">
      <h2 className="travels__container--title"> Voyages en cours </h2>
      <p className="travels--icon">˟</p>
      <img src={img1} alt="" />
      <div className="travels__commentary">
        <h3 className="commentary--title">Voyage au Pérou</h3>
        <p className="commentary--text">Trop bien, ça dure deux jours</p>
      </div>
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
  </div>
);

export default Container;
