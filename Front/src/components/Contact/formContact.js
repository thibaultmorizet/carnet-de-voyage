import React from 'react';
import './styles.scss';
import FormInput from '../FormInput';

const FormContact = () => (
  <div className="formContact">
    <h2 className="contact__title">Contact</h2>
    <form action="">
      <FormInput
        name="email"
        type="email"
        content="Email"
        onChange={() => console.log('handleChange')}
      />

      <FormInput
        name="objet"
        type="text"
        content="Objet"
        onChange={() => console.log('handleChange')}
      />

      <div className="floating-label">
        <textarea type="text" className="floating-input" name="message" placeholder=" " maxLength="255" rows="9" onChange={() => console.log('s')} />
        <label htmlFor="message"> Message </label>
      </div>
      <span>Un mail de confirmation vous sera envoyé</span>

      <div className="formContact__checkbox">
        <label className="formContact__checkbox--label" htmlFor="contact">
          <input type="checkbox" id="contact" name="contact" className="formContact__checkbox--input" />
          J'accepte la politique de confidentialité du site Carnet de Voyage
        </label>
      </div>

      <input type="submit" className="formContact__submit" name="contactSubmit" />
    </form>
  </div>
);

export default FormContact;
