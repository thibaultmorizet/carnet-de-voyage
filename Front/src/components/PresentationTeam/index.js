import React from 'react';
import Header from 'src/components/HomePage/header';
import data from 'src/assets/data';
import './styles.scss';
import Card from './card';

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
      <Header />
      <h1 className="presentationTeam__title">Présentation</h1>
      <div className="presentationTeam__cards">
        {AllCard}
      </div>
    </div>
  );
};

export default PresentationTeam;
