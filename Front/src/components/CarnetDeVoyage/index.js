// == Import npm
import React from 'react';

import { Route } from 'react-router-dom';

import HomePage from '../HomePage';
import Footer from '../Footer';
import Page from '../Page';
import Register from '../Register';
import CreateStep from '../CreateStep';
import UpdateStep from '../UpdateStep';
import User from '../../containers/user';

import Login from '../Login';
import TravelsList from '../TravelsList';

import './styles.css';
import PresentationTeam from '../PresentationTeam';

// == Composant
const CarnetDeVoyage = () => (
  <div className="carnetDeVoyage">
    <Route exact path="/">
      <Page>
        <HomePage />
      </Page>
    </Route>
    <Route exact path="/presentation">
      <Page>
        <PresentationTeam />
      </Page>
    </Route>
    <Route exact path="/register">
      <Page>
        <Register />
      </Page>
    </Route>
    <Route exact path="/admin/user/list">
      <User />
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
    <Route exact path="/travel/:id/add">
      <Page>
        <CreateStep />
      </Page>
    </Route>
    <Route exact path="/travel/:id/update/:type">
      <Page>
        <UpdateStep />
      </Page>
    </Route>

    <Route exact path="/spinner" />

    <Footer />
  </div>
);

// == Export
export default CarnetDeVoyage;
