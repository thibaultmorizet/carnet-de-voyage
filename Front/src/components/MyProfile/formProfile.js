import React from 'react';
import FormInput from 'src/components/FormInput';
import './styles.scss';

const FormProfile = () => (
  <div className="formProfile">

    <form action="" className="formProfile__form">
      <h2 className="formProfile__form--title">Mon profil</h2>
      <div className="formProfile__form--content">
        <FormInput
          type="text"
          name="lastname"
          content="Nom"
          onChange={() => console.log('change')}
        />

        <FormInput
          type="text"
          name="firstname"
          content="Prénom"
          onChange={() => console.log('change')}
        />

        <FormInput
          type="password"
          name="password"
          content="Mot de passe"
          onChange={() => console.log('change')}
        />

        <FormInput
          type="password"
          name="passwordVerification"
          content="Vérification du mot de passe "
          onChange={() => console.log('change')}
        />

      </div>
      <div className="formProfile__form--buttons">
        <input type="text" className="submitButtonUser" value="Enregistrer les modifications" />
        <input type="text" className="deleteButtonUser" value="Supprimer mon compte" />
      </div>
    </form>
  </div>
);

export default FormProfile;
