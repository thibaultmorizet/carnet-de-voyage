import { combineReducers } from 'redux';
import register from './register';
import createStep from './createStep';
import user from './user';

export default combineReducers({
  register,
  createStep,
  user,
});
