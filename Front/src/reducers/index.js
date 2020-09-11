import { combineReducers } from 'redux';
import register from './register';
import createStep from './createStep';

export default combineReducers({
  register,
  createStep,
});
