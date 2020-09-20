import axios from 'axios';
import Cookies from 'js-cookie';
import { SAVE_DATA_CREATE_TRAVEL } from '../actions/createTravel';

const Login = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_DATA_CREATE_TRAVEL: {
      const state = store.getState();
      const token = Cookies.get('token');

      axios.post('http://34.239.44.174/api/travels/create', {
        title: state.createTravel.title,
        description: state.createTravel.description,
        travel_date: state.createTravel.creation_date,
        picture_url: state.createTravel.picture,
      }, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export default Login;
