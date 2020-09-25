import axios from 'axios';
import Cookies from 'js-cookie';
import { SAVE_STEP, saveDataStep } from '../actions/createStep';

const CreateStep = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_STEP: {
      const state = store.getState();
      const travelId = state.createStep.travel_id;
      const token = Cookies.get('token');

      axios.post(`http://34.239.44.174/api/travel/${travelId}/add`, {
        title: state.createStep.title,
        description: state.createStep.description,
        latitude: state.createStep.latitude,
        longitude: state.createStep.longitude,
        step_date: state.createStep.step_date,
        pictures: state.createStep.picture,
        travel_id: state.createStep.travel_id,
      }, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          store.dispatch(saveDataStep('Success'));
        })
        .catch((error) => {
          const actionToDispatch = saveDataStep('Error');
          store.dispatch(actionToDispatch);
        });
      break;
    }
    default:
      next(action);
  }
};
export default CreateStep;
