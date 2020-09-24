import axios from 'axios';
import Cookies from 'js-cookie';
import {
  FETCH_DATA_FOR_UPDATE_TRAVEL,
  keepDataForUpdateTravel,
  SEND_DATA_FOR_UPDATE_TRAVEL,
  changeDateForUpdateTravel,
  DELETE_TRAVEL,
  errorUnthorizedUpdateTravel,
} from '../actions/updateTravel';

const updateTravel = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA_FOR_UPDATE_TRAVEL: {
      const state = store.getState();
      const token = Cookies.get('token');

      axios.get(`http://34.239.44.174/api/travels/${state.updateTravel.id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          const newDate = new Date(response.data.creationDate);
          const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
          const middleDate = newDate.toLocaleDateString('de-DE', options);
          const creationDate = middleDate.replace('.', '/').replace('.', '/');
          store.dispatch(keepDataForUpdateTravel(response.data, creationDate));
        })
        .catch((error) => store.dispatch(errorUnthorizedUpdateTravel()));
      break;
    }
    case SEND_DATA_FOR_UPDATE_TRAVEL: {
      const state = store.getState();
      const token = Cookies.get('token');

      axios.put(`http://34.239.44.174/api/travels/${state.updateTravel.id}/update`, {
        title: state.updateTravel.title,
        description: state.updateTravel.description,
        creation_date: state.updateTravel.creation_date,
        picture_travel: state.updateTravel.picture[0].url,
        picture_data: state.updateTravel.picture[0].data,
        status: state.updateTravel.status,
      }, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          store.dispatch(changeDateForUpdateTravel('Success', 'response'));
        })
        .catch((error) => store.dispatch(changeDateForUpdateTravel('Error', 'response')));
      break;
    }

    case DELETE_TRAVEL: {
      const state = store.getState();
      const token = Cookies.get('token');
      const { id } = action;
      axios.delete(`http://34.239.44.174/api/travels/${id}/delete`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export default updateTravel;
