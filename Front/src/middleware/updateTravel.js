import axios from 'axios';
import Cookies from 'js-cookie';
import {
  FETCH_DATA_FOR_UPDATE_TRAVEL, keepDataForUpdateTravel, SEND_DATA_FOR_UPDATE_TRAVEL, changeDateForUpdateTravel,
} from '../actions/updateTravel';

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
    case SEND_DATA_FOR_UPDATE_TRAVEL: {
      const state = store.getState();
      const token = Cookies.get('token');

      axios.put('http://34.239.44.174/api/travels/57/update', {
        title: state.updateTravel.title,
        description: state.updateTravel.description,
        creation_date: state.updateTravel.creation_date,
        picture: state.updateTravel.picture[0],
        status: state.updateTravel.status,
      }, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          console.log(response.data);
          store.dispatch(changeDateForUpdateTravel('Success', 'response'));
        })
        .catch((error) => store.dispatch(changeDateForUpdateTravel('Error', 'response')));
      break;
    }
    default:
      next(action);
  }
};

export default updateTravel;
