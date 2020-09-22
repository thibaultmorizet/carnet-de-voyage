import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
import { useHistory, Redirect } from 'react-router-dom';
import './styles.scss';

const urlInput = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const inputElement = document.querySelector('.urlInput__form--url').value;
    location.replace(inputElement);
  };
  return (
    <div className="urlInput">
      <form className="urlInput__form" action="" onSubmit={handleSubmit}>
        <input className="urlInput__form--url" type="url" placeholder="Url visiteur" />
        <input type="submit" className="urlInput__form--button" id="inputPresentation" value="Rejoindre" />
      </form>
    </div>
  );
};

export default urlInput;
