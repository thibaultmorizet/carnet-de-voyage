import React from 'react';
import Cookies from 'js-cookie';
import MenuBurger from 'src/components/MenuBurger';
import MenuDesktop from 'src/components/MenuDesktop';
import './styles.scss';
import FormProfile from 'src/containers/myProfile';

const MyProfile = () => (
  <div className="myProfile">
    {Cookies.get('loggedIn') && (
      <>
        <MenuBurger />
        <MenuDesktop />
      </>
    )}
    <FormProfile />
  </div>
);

export default MyProfile;
