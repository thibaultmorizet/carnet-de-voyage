import React from 'react';
import Menu from 'src/components/Menu';
import data from 'src/assets/data';
import Cookies from 'js-cookie';
import './styles.scss';
import Card from './card';
import MenuBurger from '../MenuBurger';
import MenuDesktop from '../MenuDesktop';

const PresentationTeam = () => {
  const AllCard = data.map((elt) => (
    <Card
      key={elt.name}
      name={elt.name}
      spe={elt.specialization}
      job={elt.job}
      photo={elt.photo}
      link={elt.link}
    />
  ));
  return (
    <div className="presentationTeam">
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

      <h1 className="presentationTeam__title">Présentation</h1>
      <div className="presentationTeam__cards">
        {AllCard}
      </div>
    </div>
  );
};

export default PresentationTeam;
