import axios from 'axios';
import Cookies from 'js-cookie';
import { FETCH_DATA_FOR_SINGLE_TRAVEL, saveDataForSingleTravel, errorUnthorizedTravel } from '../actions/travel';

const travel = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA_FOR_SINGLE_TRAVEL: {
      const state = store.getState();
      const token = Cookies.get('token');

      axios.get(`http://34.239.44.174/api/travels/${action.id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveDataForSingleTravel(response.data));
        })
        .catch((error) => store.dispatch(errorUnthorizedTravel()));
      break;
    }
    default:
      next(action);
  }
};

export default travel;
