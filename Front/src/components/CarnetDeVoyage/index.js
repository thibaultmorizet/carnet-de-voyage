// == Import npm
import React from 'react';

import { Route } from 'react-router-dom';

import HomePage from '../HomePage';
import Footer from '../Footer';
import Page from '../Page';
import Register from '../Register';
import Login from '../Login';
import TravelsList from '../TravelsList';

import './styles.css';

// == Composant
const CarnetDeVoyage = () => (
  <div className="carnetDeVoyage">
    <Route exact path="/">
      <Page>
        <HomePage />
      </Page>
    </Route>
    <Route exact path="/register">
      <Page>
        <Register />
      </Page>
    </Route>
    <Route exact path="/login">
      <Page>
        <Login />
      </Page>
    </Route>
    <Route exact path="/travels/list">
      <Page>
        <TravelsList />
      </Page>
    </Route>
    <Footer />
  </div>
);

// == Export
export default CarnetDeVoyage;
