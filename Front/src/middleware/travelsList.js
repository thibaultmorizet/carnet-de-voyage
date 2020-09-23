import axios from 'axios';
import Cookies from 'js-cookie';
import { SAVE_DATA_TRAVELS_LIST, saveDateResponseTravelsList } from '../actions/travelsList';

const TravelsList = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_DATA_TRAVELS_LIST: {
      const state = store.getState();
      const token = Cookies.get('token');

      axios.post('http://34.239.44.174/api/travels/list', {
        title: state.travelsList.title,
        description: state.travelsList.description,
        picture_travel: state.travelsList.picture[0].url,
      }, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          console.log(response);
          const actionToDispatch = saveDateResponseTravelsList('Success');
          store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(error);
          const actionToDispatch = saveDateResponseTravelsList('Error');
          store.dispatch(actionToDispatch);
        });
      break;
    }
    default:
      next(action);
  }
};

export default TravelsList;
