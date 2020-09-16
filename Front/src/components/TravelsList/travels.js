import React from 'react';
import './styles.scss';

const Container = () => (

  <div className="travels__container">

    <div className="travels__title">
      <h1 className="travels__container--title"> Voyages en cours </h1>
      <h1 className="travels__container--title"> Voyages terminés </h1>
    </div>

    <div>
      <input type="submit" name="travelsInput" id="travelsInput" value="Créer un nouveau voyage" />
    </div>

  </div>

);

export default Container;
