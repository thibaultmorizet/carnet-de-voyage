import axios from 'axios';
import { FETCH_DATA_FOR_USER, saveDataForUser, SEND_DATA_FOR_UPDATE_USER } from '../actions/myProfile';

const Register = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA_FOR_USER: {
      const state = store.getState();
      console.log(state);
      // store.dispatch(saveDataForUser());
      break;
    }
    case SEND_DATA_FOR_UPDATE_USER: {
      const state = store.getState();
      console.log(state);
      break;
    }
    default:
      next(action);
  }
};
export default Register;
