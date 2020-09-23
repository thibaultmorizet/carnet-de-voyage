import { combineReducers } from 'redux';
import register from './register';
import createStep from './createStep';
import user from './user';
import login from './login';
import keepToken from './keepToken';
import updateStep from './updateStep';
import contact from './contact';
import travel from './travel';
import comment from './comment';
import createTravel from './createTravel';
import updateTravel from './updateTravel';
import travelsList from './travelsList';
import myProfile from './myProfile';

export default combineReducers({
  register,
  createStep,
  user,
  login,
  keepToken,
  updateStep,
  contact,
  travel,
  comment,
  createTravel,
  updateTravel,
  travelsList,
  myProfile,
});
