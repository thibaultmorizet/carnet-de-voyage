import axios from 'axios';
import Cookies from 'js-cookie';
import { FETCH_DATA_TRAVELS_LIST, saveDataTravelsList } from '../actions/travelsList';

const travelsList = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA_TRAVELS_LIST: {
      const state = store.getState();
      const token = Cookies.get('token');

      axios.get('http://34.239.44.174/api/travels/list', { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          const { data } = response;
          const travelsInProgress = data.filter((elt) => elt.status === false);
          const travelsDone = data.filter((elt) => elt.status === true);

          store.dispatch(saveDataTravelsList(travelsInProgress, travelsDone));
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export default travelsList;
