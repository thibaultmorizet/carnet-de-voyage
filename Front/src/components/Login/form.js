import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginInput from '../LoginInput';
import './styles.scss';

const LoginForm = () => (

  <div className="login__form">
    <h1 className="login__form--title">Connexion</h1>
    <form action="">

      <LoginInput
        type="email"
        name="email"
        content="Email"
      />

      <LoginInput
        type="password"
        name="password"
        content="Mot de passe"
      />

      <div>
        <input type="checkbox" id="loginCheckbox" name="loginCheckbox" />
        <span className="check__span">
          Se souvenir de moi
        </span>
      </div>
      <NavLink
        to="/"
        exact
      >
        <input type="submit" name="loginSubmit" id="loginSubmit" value="Se connecter" />
      </NavLink>
      <div className="form__span">
        <span>
          <NavLink
            to="/email-forgot-password"
            exact
          >
            Mot de passe oublié ?
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/email-forgot-password"
            exact
          >
            Vous n'êtes pas inscrit ?
          </NavLink>
        </span>
      </div>
    </form>
  </div>
);

export default LoginForm;
