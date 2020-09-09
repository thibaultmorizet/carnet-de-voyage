/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import FormInput from '../FormInput';
import './styles.scss';

const RegisterForm = () => {
  console.log('salut');
  return (
    <div className="register__form">
      <h2 className="register__form--title">Inscription</h2>
      <form action="">

        <FormInput
          type="text"
          name="last_name"
          content="Nom"
        />

        <FormInput
          type="text"
          name="first_name"
          content="Prénom"
        />

        <FormInput
          type="email"
          name="email"
          content="Email"
        />

        <FormInput
          type="password"
          name="password"
          content="Mot de passe"
        />

        <div className="password__span">
          <span>
            Le mot de passe doit contenir au minimum 8 caractères,
            une majuscule et un chiffre
          </span>
        </div>

        <FormInput
          type="password"
          name="passwordVerify"
          content="Répéter le mode de passe"
        />

        <input type="submit" name="registerSubmit" id="registerSubmit" value="S'inscrire" />
      </form>

    </div>
  );
};

export default RegisterForm;

// Nom -- last_name
// Prénom -- first_name
// Email -- email
// Mot de passe -- password
