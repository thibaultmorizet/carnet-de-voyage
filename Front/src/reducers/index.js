import { combineReducers } from 'redux';
import register from './register';
import createStep from './createStep';
import user from './user';
import login from './login';

export default combineReducers({
  register,
  createStep,
  user,
  login,
});
