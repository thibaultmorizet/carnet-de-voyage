// == Import npm
import React from 'react';

import Menu from '../Menu';
import Button from '../Button';
import Title from '../Title';
import Footer from '../Footer';

import './styles.css';

// == Composant
const CarnetDeVoyage = () => (
  <div className="carnetDeVoyage">
    <Button text="Connexion" />
    <Title text="Carnets de Voyage" />
    <Footer />

  </div>
);

// == Export
export default CarnetDeVoyage;
