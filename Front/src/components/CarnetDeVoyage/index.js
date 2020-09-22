// == Import npm
import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import Cookies from 'js-cookie';
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
import Contact from '../Contact';
import Travel from '../Travel';
import Privacy from '../Privacy';
import CreateTravel from '../CreateTravel';
import UpdateTravel from '../UpdateTravel';
import MyProfile from '../MyProfile';

const CarnetDeVoyage = ({ loggedIn }) => {
  console.log('status', loggedIn);
  console.log('cookie', Cookies.get('loggedIn'));
  return (
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
      <Route exact path="/privacy">
        <Page>
          <Privacy />
        </Page>
      </Route>
      <Route exact path="/contact">
        <Page>
          <Contact />
        </Page>
      </Route>
      <Route exact path="/register">
        <Page>
          <Register />
        </Page>
      </Route>
      <Route exact path="/login">
        {Cookies.get('loggedIn') ? <Redirect push to="/travels/list" /> : (
          <Page>
            <Login />
          </Page>
        )}
      </Route>
      <Route exact path="/admin/user/list">
        <User />
      </Route>

      <Route exact path="/travels/list">
        {!Cookies.get('loggedIn') ? <Redirect push to="/login" /> : (
          <Page>
            <TravelsList />
          </Page>
        )}

      </Route>
      <Route exact path="/travel/:id/add">
        {!Cookies.get('loggedIn') ? <Redirect push to="/login" /> : (
          <Page>
            <CreateStep />
          </Page>
        )}

      </Route>
      <Route exact path="/travel/:id/update/:type">
        {!Cookies.get('loggedIn') ? <Redirect push to="/login" /> : (
          <Page>
            <UpdateStep />
          </Page>
        )}
      </Route>

      <Route exact path="/travels/create">
        {!Cookies.get('loggedIn') ? <Redirect push to="/login" /> : (
          <Page>
            <CreateTravel />
          </Page>
        )}
      </Route>

      <Route exact path="/travel/:id">
        <Page>
          <Travel />
        </Page>
      </Route>

      <Route exact path="/travel/:id/:type">
        <Page>
          <Travel />
        </Page>
      </Route>

      <Route exact path="/travel/:id/update">
        <Page>
          <UpdateTravel />
        </Page>
      </Route>

      <Route exact path="/user/myprofile">
        <Page>
          <MyProfile />
        </Page>
      </Route>

      <Footer />
    </div>
  );
};

// == Export
export default CarnetDeVoyage;
