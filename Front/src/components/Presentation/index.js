import React from 'react';
import UrlInput from '../UrlInput';
import './styles.scss';

const Presentation = () => (
  <>
    <article className="presentation">
      <div className="presentation__text">
        Créez et partagez simplement votre carnet de voyage, ajoutez photos, souvenirs et émotions
        de vos étapes en temps réel sur une carte, puis partagez le avec votre famille et vos amis.
        <span className="presentation__text--span">★★★★★ </span>
        <span className="presentation__text--span certification">Certifié par nous </span>
      </div>

    </article>
    <UrlInput />
  </>
);

export default Presentation;
