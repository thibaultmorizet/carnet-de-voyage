import axios from 'axios';
import Cookies from 'js-cookie';
import { SAVE_DATA_CREATE_TRAVEL, saveDataResponseCreateTravel } from '../actions/createTravel';

const Login = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_DATA_CREATE_TRAVEL: {
      const state = store.getState();
      const token = Cookies.get('token');

      axios.post('http://34.239.44.174/api/travels/create', {
        title: state.createTravel.title,
        description: state.createTravel.description,
        travel_date: state.createTravel.creation_date,
        picture_travel: state.createTravel.picture[0].url,
        picture_data: state.createTravel.picture[0].data,
      }, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          const actionToDispatch = saveDataResponseCreateTravel('Success');
          store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          const actionToDispatch = saveDataResponseCreateTravel('Error');
          store.dispatch(actionToDispatch);
        });
      break;
    }
    default:
      next(action);
  }
};

export default Login;
