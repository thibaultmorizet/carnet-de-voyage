/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { errorMessage } from 'src/selectors/carnetDeVoyage';
import FormInput from '../FormInput';
import './styles.scss';

const RegisterForm = ({
  handleRegister,
  changeField,
  last_name,
  first_name,
  email,
  password,
  verifyPassword,
}) => {
  const handleSubmit = (evt) => {
    let isItEmpty = false;

    if (email === '') {
      isItEmpty = true;
    }

    if (first_name === '') {
      isItEmpty = true;
    }

    if (last_name === '') {
      isItEmpty = true;
    }

    if (password === '') {
      isItEmpty = true;
    }

    if (verifyPassword === '') {
      isItEmpty = true;
    }

    if (isItEmpty === true) {
      evt.preventDefault();
      const message = 'Veuillez remplir tous les champs';
      errorMessage(message);
    }
    else if (password === verifyPassword) {
      handleRegister();
    }
    else {
      evt.preventDefault();
      const message = 'Vos mots de passe ne sont pas identiques';
      errorMessage(message);
    }
  };

  return (
    <div className="register__form">
      <h2 className="register__form--title">Inscription</h2>
      <form action="" onSubmit={handleSubmit}>

        <FormInput
          type="text"
          name="last_name"
          content="Nom"
          onChange={changeField}
        />

        <FormInput
          type="text"
          name="first_name"
          content="Prénom"
          onChange={changeField}
        />

        <FormInput
          type="email"
          name="email"
          content="Email"
          onChange={changeField}
        />

        <FormInput
          type="password"
          name="password"
          content="Mot de passe"
          onChange={changeField}
        />

        <div className="password__span">
          <span>
            Le mot de passe doit contenir au minimum 8 caractères,
            une majuscule et un chiffre
          </span>
        </div>

        <FormInput
          type="password"
          name="verifyPassword"
          content="Répéter le mode de passe"
          onChange={changeField}
        />

        <div className="register__form--submit">
          <input type="submit" name="registerSubmit" id="registerSubmit" value="S'inscrire" />
        </div>

      </form>

    </div>
  );
};

RegisterForm.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  verifyPassword: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default RegisterForm;

// Nom -- last_name
// Prénom -- first_name
// Email -- email
// Mot de passe -- password

// match(/[a-z]/)
// match(/[A-Z]/)
// match(/[0-9]/)
// match(/\d/)

// #a+# « a » doit apparaître au moins 1 fois
