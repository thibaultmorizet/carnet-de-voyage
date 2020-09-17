import { combineReducers } from 'redux';
import register from './register';
import createStep from './createStep';
import user from './user';
import login from './login';
import keepToken from './keepToken';
import contact from './contact';

export default combineReducers({
  register,
  createStep,
  user,
  login,
  keepToken,
  contact,
});
