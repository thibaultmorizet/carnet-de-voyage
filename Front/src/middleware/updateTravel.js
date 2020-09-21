import axios from 'axios';
import Cookies from 'js-cookie';
import { FETCH_DATA_FOR_UPDATE_TRAVEL, keepDataForUpdateTravel } from '../actions/updateTravel';

const updateTravel = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA_FOR_UPDATE_TRAVEL: {
      const state = store.getState();
      const token = Cookies.get('token');

      axios.get('http://34.239.44.174/api/travels/57', { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          console.log(response.data);
          const newDate = new Date(response.data.creationDate);
          const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
          const middleDate = newDate.toLocaleDateString('de-DE', options);
          const creationDate = middleDate.replace('.', '/').replace('.', '/');
          store.dispatch(keepDataForUpdateTravel(response.data, creationDate));
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export default updateTravel;
