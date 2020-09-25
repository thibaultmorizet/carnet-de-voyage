import React from 'react';
import Header from './header';
import Title from './title';
import Presentation from '../Presentation';
import './styles.scss';

const HomePage = () => (
  <div className="homePage">
    <Header />
    <Title text="Carnet de Voyage" />
    <Presentation />
  </div>
);

export default HomePage;
