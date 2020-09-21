import React from 'react';
import './styles.scss';
import FormContact from 'src/containers/contact';
import MenuBurger from '../MenuBurger';
import MenuDesktop from '../MenuDesktop';

const Contact = () => (
  <div className="contact">
    <MenuBurger />
    <MenuDesktop />
    <FormContact />
  </div>
);

export default Contact;
