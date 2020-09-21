import React from 'react';
import './styles.scss';
import { NavLink, useHistory, Redirect } from 'react-router-dom';
import { errorMessage } from 'src/selectors/carnetDeVoyage';
import FormInput from '../FormInput';

const FormContact = ({
  changeValueContact, changeCheckboxContact, checked, email, objet, description, sendEmailContact,
}) => {
  const history = useHistory();
  const handleOnChange = (evt) => {
    console.log(evt.target.value);
    changeValueContact(evt.target.value, 'message');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const allDataForRegister = [email, objet, description];
    const isEmptyElement = allDataForRegister.includes('');
    const submitElt = '.contact__submit--div';

    if (isEmptyElement === true) {
      const message = 'Veuillez remplir tous les champs';
      errorMessage(message, submitElt);
    }
    else if (checked === false) {
      const message = 'Veuillez acceptez la politique de confidentialité';
      errorMessage(message, submitElt);
    }
    else {
      sendEmailContact();
      history.push('/');
    }
  };
  return (
    <div className="formContact">
      <h2 className="contact__title">Contact</h2>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          content="Email"
          onChange={changeValueContact}
        />

        <FormInput
          name="objet"
          type="text"
          content="Objet"
          onChange={changeValueContact}
        />

        <div className="floating-label">
          <textarea type="text" className="floating-input" name="message" placeholder=" " maxLength="255" rows="9" onChange={handleOnChange} />
          <label htmlFor="message"> Message </label>
        </div>
        <span>Un mail de confirmation vous sera envoyé</span>

        <div className="formContact__checkbox">
          <label className="formContact__checkbox--label" htmlFor="contact">
            <input type="checkbox" id="contact" name="contact" className="formContact__checkbox--input" onClick={changeCheckboxContact} />
            J'accepte la politique de confidentialité du site Carnet de Voyage
          </label>
        </div>

        <div className="contact__submit--div">
          <input type="submit" className="formContact__submit" name="contactSubmit" />
        </div>
      </form>
    </div>
  );
};

export default FormContact;
