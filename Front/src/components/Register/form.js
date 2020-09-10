/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';
import { errorMessage } from '../../selectors/carnetDeVoyage';
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
  const history = useHistory();
  const { addToast } = useToasts();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const allDataForRegister = [email, first_name, last_name, password, verifyPassword];
    const emptyElement = allDataForRegister.includes('');

    // If inputs are empty
    if (emptyElement === true) {
      const message = 'Veuillez remplir tous les champs';
      errorMessage(message);
    }
    // if password and passwordVerify are not the same
    else if (password === verifyPassword) {
      // regex : lowerCase, upperCase, a number, eight letter minimum
      const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/;
      const isItGoodPasswordCharacter = password.match(regex);
      if (isItGoodPasswordCharacter === null) {
        const message = 'Votre mot de passe ne contient pas les caractères demandés';
        errorMessage(message);
      }
      else {
        handleRegister();
        addToast('Incription Réussie ! Vous allez recevoir un email de confirmation', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push('/login');
      }
    }
    else {
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
// Salut1234
