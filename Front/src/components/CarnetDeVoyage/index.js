// == Import npm
import React from 'react';

import { Route } from 'react-router-dom';
import Title from '../Title';
import Footer from '../Footer';
import Presentation from '../Presentation';
import UrlInput from '../UrlInput';
import HeaderHomepage from '../HeaderHomepage';
import Page from '../Page';
import Login from '../Login';

import './styles.css';

// == Composant
const CarnetDeVoyage = () => (
  <div className="carnetDeVoyage">
    <Route exact path="/">
      <Page>
        <HeaderHomepage />
        <Title text="Carnets de Voyage" />
        <Presentation />
        <UrlInput />
      </Page>
    </Route>
    <Route exact path="/login">
      <Page>
        <Login />
      </Page>
    </Route>
    <Footer />
  </div>
);

// == Export
export default CarnetDeVoyage;
