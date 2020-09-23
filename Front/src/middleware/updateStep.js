import axios from 'axios';
import Cookies from 'js-cookie';
import {
  FETCH_DATA_STEP, saveDataStep, SEND_DATA_UPDATE, DELETE_STEP, responseUpdateStep, errorUnthorizedUpdateStep,
} from '../actions/updateStep';

const updateStep = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA_STEP: {
      const state = store.getState();
      const token = Cookies.get('token');

      axios.get(`http://34.239.44.174/api/travel/${state.updateStep.id}/step/${state.updateStep.type}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          const travelId = response.data.travel.id;
          const {
            title,
            description,
            latitude,
            longitude,
            pictures,
            stepDate,
            id,
          } = response.data;

          const newDate = new Date(stepDate);
          const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
          const middleDate = newDate.toLocaleDateString('de-DE', options);
          const step_date = middleDate.replace('.', '/').replace('.', '/');

          const AllPictures = [];
          pictures.map((elt) => {
            const currentImg = {
              url: elt.id,
              data: `http://34.239.44.174/uploads/pictures/${elt.url}`,
            };
            AllPictures.push(currentImg);
          });

          const dataStep = {
            title, description, latitude, longitude, AllPictures, step_date, id, travelId,
          };

          store.dispatch(saveDataStep(dataStep));
        })
        .catch((error) => store.dispatch(errorUnthorizedUpdateStep()));
      break;
    }
    case SEND_DATA_UPDATE: {
      const state = store.getState();
      const token = Cookies.get('token');

      axios.put(`http://34.239.44.174/api/travel/${state.updateStep.travel_id}/update/${state.updateStep.id}`, {
        title: state.updateStep.title,
        description: state.updateStep.description,
        latitude: state.updateStep.latitude,
        longitude: state.updateStep.longitude,
        step_date: state.updateStep.step_date,
        'pictures-delete': state.updateStep.pictures_delete,
        'pictures-new': state.updateStep.pictures_new,
        travel_id: state.updateStep.travel_id,
        id: state.updateStep.id,
      }, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          store.dispatch(responseUpdateStep('Success'));
        })
        .catch((error) => {
          store.dispatch(responseUpdateStep('Error'));
        });
      break;
    }

    case DELETE_STEP: {
      const state = store.getState();
      const token = Cookies.get('token');

      axios.delete(`http://34.239.44.174/api/travel/${state.updateStep.travel_id}/delete/${state.updateStep.id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          store.dispatch(responseUpdateStep('Success'));
        })
        .catch((error) => {
          store.dispatch(responseUpdateStep('Error'));
        });
      break;
    }
    default:
      next(action);
  }
};

export default updateStep;
