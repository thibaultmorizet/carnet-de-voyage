import React from 'react';
import './styles.scss';
import FormContact from 'src/containers/contact';
import Menu from '../Menu';

const Contact = () => (
  <div className="contact">
    <Menu />
    <FormContact />
  </div>
);

export default Contact;
