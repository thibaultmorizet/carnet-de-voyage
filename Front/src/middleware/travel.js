import axios from 'axios';
import Cookies from 'js-cookie';
import {
  FETCH_DATA_FOR_SINGLE_TRAVEL, FETCH_DATA_FOR_GUEST, saveDataForSingleTravel, fetchDataForGuest,
} from '../actions/travel';

const travel = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA_FOR_SINGLE_TRAVEL: {
      const state = store.getState();
      const token = Cookies.get('token');
      console.log(action);

      axios.get(`http://34.239.44.174/api/travels/${action.id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveDataForSingleTravel(response.data));
        })
        .catch((error) => store.dispatch(fetchDataForGuest(action.id, action.token)));
      break;
    }
    case FETCH_DATA_FOR_GUEST: {
      const state = store.getState();
      console.log(action);
      axios.get(`http://34.239.44.174/travels/${action.id}/${action.slug}`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveDataForSingleTravel(response.data));
        })
        .catch((error) => console.log((error)));
      break;
    }
    default:
      next(action);
  }
};

export default travel;
