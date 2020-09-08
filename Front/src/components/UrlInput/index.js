import React from 'react';
import './styles.scss';

const urlInput = () => (
  <div className="urlInput">
    <form className="urlInput__form" action="">
      <input className="urlInput__form--url" type="url" placeholder="Url visiteur" />
      <input type="button" className="urlInput__form--button" id="inputPresentation" value="Rejoindre" />
    </form>
  </div>
);

export default urlInput;
