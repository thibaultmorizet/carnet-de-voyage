// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from '../reducers';
import logMiddleware from '../middleware/logMiddleware';
import createStep from '../middleware/createStep';
import register from '../middleware/register';
import login from '../middleware/login';
import loginCheck from '../middleware/loginCheck';
import user from '../middleware/user';
import updateStep from '../middleware/updateStep';
import contact from '../middleware/contact';
import travel from '../middleware/travel';
import comment from '../middleware/comment';
import createTravel from '../middleware/createTravel';
import updateTravel from '../middleware/updateTravel';
import travelsList from '../middleware/travelsList';
import myProfile from '../middleware/myProfile';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    createStep,
    register,
    loginCheck,
    login,
    user,
    updateStep,
    contact,
    travel,
    comment,
    createTravel,
    updateTravel,
    travelsList,
    myProfile,
    // secondMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
