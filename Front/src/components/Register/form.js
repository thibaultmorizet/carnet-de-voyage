/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles.scss';

const RegisterForm = () => {
  const essai = (evt) => {
    evt.target.classList.add('active');
    console.log(evt.target);
  };
  return (
    <div className="register__form">
      <h2 className="register__form--title">Inscription</h2>
      <form action="">

        <div className="floating-label">
          <input className="floating-input" name="last_name" type="text" placeholder=" " />
          <label htmlFor="last_name">Nom</label>
        </div>

        <div className="floating-label">
          <input className="floating-input" name="first_name" type="text" placeholder=" " />
          <label htmlFor="first_name">Prénom</label>
        </div>

        <div className="floating-label">
          <input className="floating-input" name="email" type="text" placeholder=" " />
          <label htmlFor="email">Email</label>
        </div>

        <div className="floating-label">
          <input className="floating-input" name="password" type="password" placeholder=" " />
          <label htmlFor="password">Mot de passe</label>
        </div>

        <div className="password__span">
          <span>
            Le mot de passe doit contenir au minimum 8 caractères,
            une majuscule et un chiffre
          </span>
        </div>

        <div className="floating-label">
          <input className="floating-input" name="passwordVerify" type="password" placeholder=" " />
          <label htmlFor="passwordVerify">Répéter votre mot de passe</label>
        </div>

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
// Répéter le mot de passe

// Mot de passe -- password
// Répéter le mot de passe
