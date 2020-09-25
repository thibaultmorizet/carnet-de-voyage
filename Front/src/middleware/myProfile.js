import axios from 'axios';
import Cookies from 'js-cookie';
import {
  FETCH_DATA_FOR_USER, saveDataForUser, SEND_DATA_FOR_UPDATE_USER, changeFieldForDataUser, DELETE_USER,
} from '../actions/myProfile';

const Register = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA_FOR_USER: {
      const state = store.getState();
      // store.dispatch(saveDataForUser());
      const token = Cookies.get('token');

      axios.get('http://34.239.44.174/api/user', { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => store.dispatch(saveDataForUser(response.data)))
        .catch((error) => console.log(error));
      break;
    }
    case SEND_DATA_FOR_UPDATE_USER: {
      const state = store.getState();
      const token = Cookies.get('token');
      const { id } = state.myProfile;

      axios.put(`http://34.239.44.174/api/user/${id}/update`, {
        lastName: state.myProfile.lastname,
        firstName: state.myProfile.firstname,
        password: state.myProfile.password,
        email: state.myProfile.email,

      }, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => store.dispatch(changeFieldForDataUser('Success', 'response')))
        .catch((error) => store.dispatch(changeFieldForDataUser('Error', 'response')));
      break;
    }
    case DELETE_USER: {
      const state = store.getState();
      const { id } = state.myProfile;
      // store.dispatch(saveDataForUser());
      const token = Cookies.get('token');

      axios.delete(`http://34.239.44.174/api/user/${id}/delete`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          Cookies.remove('token');
          Cookies.remove('loggedIn');
          location.replace('/');
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};
export default Register;
