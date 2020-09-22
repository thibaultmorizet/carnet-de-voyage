import React from 'react';
import './styles.scss';
import Cookies from 'js-cookie';
import Menu from 'src/components/Menu';
import FormContact from 'src/containers/contact';
import MenuBurger from '../MenuBurger';
import MenuDesktop from '../MenuDesktop';

const Contact = () => (
  <div className="contact">
    {Cookies.get('loggedIn') && (
      <>
        <MenuBurger />
        <MenuDesktop />
      </>
    )}

    {!Cookies.get('loggedIn') && (
      <>
        <Menu />
      </>
    )}
    <FormContact />
  </div>
);

export default Contact;
