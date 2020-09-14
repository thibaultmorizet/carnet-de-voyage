import { combineReducers } from 'redux';
import register from './register';
import user from './user';

export default combineReducers({
  register,
  user,
});
