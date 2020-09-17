/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';
import { errorMessage } from '../../selectors/carnetDeVoyage';
import FormInput from '../FormInput';
import { useCookies } from 'react-cookie';
import './styles.scss';

const LoginForm = ({
  handleLogin,
  changeField,
  email,
  password,
  token,
}) => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['name']);

  const addTokenCookie = () => {
    if (token !== '') {
      setCookie('token', token, { path: '/' });
      history.push('/travels/list');
    }
  };

  useEffect(() => {
    addTokenCookie();
    console.log('token');
  }, [token]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const allDataForLogin = [email, password];
    const emptyElement = allDataForLogin.includes('');

    // If inputs are empty
    if (emptyElement === true) {
      const message = 'Veuillez remplir tous les champs';
      errorMessage(message);
    }
    else {
      handleLogin();
    }
  };

  return (
    <div className="login__form">
      <h1 className="login__form--title">Connexion</h1>
      <form action="" onSubmit={handleSubmit}>

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
              to="/register"
              exact
            >
              Vous n'êtes pas inscrit ?
            </NavLink>
          </span>
        </div>

      </form>

    </div>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default LoginForm;
