import React from 'react';
import Header from './header';
import Title from './title';
import Presentation from '../Presentation';
import UrlInput from '../UrlInput';
import './styles.scss';

const HomePage = () => (
  <div className="homePage">
    <Header />
    <Title text="Carnets de Voyage" />
    <Presentation />
    <UrlInput />
  </div>
);

export default HomePage;
