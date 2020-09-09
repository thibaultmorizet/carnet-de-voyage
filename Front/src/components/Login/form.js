import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const LoginForm = () => (

    <div className="login__form">
      <h1 className="login__form--title">Connexion</h1>
      <form action="">

        <div className="floating-label">
          <input className="floating-input" name="email" type="email" placeholder=" " />
          <label htmlFor="email">Email</label>
        </div>

        <div className="floating-label">
          <input className="floating-input" name="password" type="password" placeholder=" " />
          <label htmlFor="password">Mot de passe</label>
        </div>

        <div>
          <input type="checkbox" id="loginCheckbox" name="loginCheckbox" />
          <span className="check__span">
            Se souvenir de moi
          </span>
        </div>

        <input type="submit" name="loginSubmit" id="loginSubmit" value="Se connecter" />

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
