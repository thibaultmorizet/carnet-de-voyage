/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles.scss';

const RegisterForm = () => (
  <div className="register__form">
    <h2 className="register__form--title">Inscription</h2>
    <form action="">
      <div>
        <label htmlFor="last_name" className="register__form--last_name">Nom</label>
        <input type="text" name="last_name" />
      </div>
      <div>
        <label htmlFor="first_name">Prénom</label>
        <input type="text" name="first_name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Mot de passe</label>
        <input type="password" name="password" />
      </div>
      <div>
        <label htmlFor="passwordVerification">Vérification du mot de passe</label>
        <input type="passwordVerification" name="passwordVerification" />
      </div>

      <input type="submit" name="registerSubmit" id="registerSubmit" value="S'inscrire" />
    </form>
  </div>
);

export default RegisterForm;

// Nom -- last_name
// Prénom -- first_name
// Email -- email
// Mot de passe -- password
// Répéter le mot de passe

// Mot de passe -- password
// Répéter le mot de passe
