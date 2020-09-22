import React, { useEffect } from 'react';
import FormInput from 'src/components/FormInput';
import PropTypes from 'prop-types';
import { errorMessage } from 'src/selectors/carnetDeVoyage';
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
}) => {
  useEffect(() => {
    fetchDataForUser();
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('je submit');
    const allDataForRegister = [firstname, lastname, password, verifyPassword];
    const emptyElement = allDataForRegister.includes('');
    const divElt = '.formProfile__form--buttons';

    // If inputs are empty
    if (emptyElement === true) {
      const message = 'Veuillez remplir tous les champs';
      errorMessage(message, divElt);
    }
    // if password and passwordVerify are not the same
    else if (password === verifyPassword) {
      // regex : lowerCase, upperCase, a number, eight letter minimum
      const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/;
      const isItGoodPasswordCharacter = password.match(regex);
      if (isItGoodPasswordCharacter === null) {
        const message = 'Votre mot de passe ne contient pas les caractères demandés';
        errorMessage(message, divElt);
      }
      else {
        console.log('je submit');
        sendDataForUpdateUser();
      }
    }
    else {
      const message = 'Vos mots de passe ne sont pas identiques';
      errorMessage(message, divElt);
    }
  };
  return (
    <div className="formProfile">
      {/* {loading && (
      <Spinner />
      )} */}

      <form action="" className="formProfile__form" onSubmit={handleSubmit}>
        <h2 className="formProfile__form--title">Mon profil</h2>
        <div className="formProfile__form--content">
          <FormInput
            type="text"
            name="lastname"
            content="Nom"
            onChange={changeFieldForDataUser}
          />

          <FormInput
            type="text"
            name="firstname"
            content="Prénom"
            onChange={changeFieldForDataUser}
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
};

export default FormProfile;
