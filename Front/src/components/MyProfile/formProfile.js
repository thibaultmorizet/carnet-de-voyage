import React, { useEffect } from 'react';
import FormInput from 'src/components/FormInput';
import PropTypes from 'prop-types';
import { errorMessage, toastNotification } from 'src/selectors/carnetDeVoyage';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';
import Spinner from 'src/components/Spinner';
import './styles.scss';

const FormProfile = ({
  fetchDataForUser,
  firstname,
  lastname,
  password,
  verifyPassword,
  changeFieldForDataUser,
  sendDataForUpdateUser,
  loading,
  response,
  email,
}) => {
  const history = useHistory();
  const { addToast } = useToasts();

  useEffect(() => {
    fetchDataForUser();
  }, []);

  const toastFailOrSuccess = () => {
    const message = `Vos informations personnelles ont bien été modifiée ${firstname} ;)`;
    const destination = '/travels/list';
    toastNotification(addToast, history, response, message, destination);
  };

  useEffect(() => {
    toastFailOrSuccess();
  }, [response]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const allDataForRegister = [firstname, lastname, email];
    const emptyElement = allDataForRegister.includes('');
    const divElt = '.formProfile__form--buttons';

    // If inputs are empty
    if (emptyElement === true) {
      const message = 'Veuillez remplir tous les champs';
      errorMessage(message, divElt);
    }
    // if password and passwordVerify are not the same
    else if (password !== '' && password === verifyPassword) {
      // regex : lowerCase, upperCase, a number, eight letter minimum
      const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/;
      const isItGoodPasswordCharacter = password.match(regex);
      if (isItGoodPasswordCharacter === null) {
        const message = 'Votre mot de passe ne contient pas les caractères demandés';
        errorMessage(message, divElt);
      }
      else {
        sendDataForUpdateUser();
      }
    }
    else {
      sendDataForUpdateUser();
    }
  };
  return (
    <div className="formProfile">
      {loading && (
      <Spinner />
      )}

      {!loading && (
        <form action="" className="formProfile__form" onSubmit={handleSubmit}>
          <h2 className="formProfile__form--title">Mon profil</h2>
          <div className="formProfile__form--content">
            <FormInput
              type="text"
              name="lastname"
              content="Nom"
              onChange={changeFieldForDataUser}
              value={lastname}
            />

            <FormInput
              type="text"
              name="firstname"
              content="Prénom"
              onChange={changeFieldForDataUser}
              value={firstname}
            />

            <FormInput
              type="email"
              name="email"
              content="Email"
              onChange={changeFieldForDataUser}
              value={email}
            />

            <FormInput
              type="password"
              name="password"
              content="Mot de passe"
              onChange={changeFieldForDataUser}
            />

            <FormInput
              type="password"
              name="verifyPassword"
              content="Vérification du mot de passe "
              onChange={changeFieldForDataUser}
            />

          </div>
          <div className="formProfile__form--buttons">
            <input type="submit" className="submitButtonUser" value="Enregistrer les modifications" />
            <input type="button" className="deleteButtonUser" value="Supprimer mon compte" />
          </div>
        </form>
      )}

    </div>
  );
};

FormProfile.propTypes = {
  fetchDataForUser: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  verifyPassword: PropTypes.string.isRequired,
  changeFieldForDataUser: PropTypes.func.isRequired,
  sendDataForUpdateUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  response: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default FormProfile;
