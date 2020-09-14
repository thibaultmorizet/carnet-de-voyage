import axios from 'axios';
import { SAVE_STEP } from 'src/actions/createStep';

const CreateStep = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_STEP: {
      const state = store.getState();
      const travelId = state.createStep.travel_id;
      axios.post(`http://34.239.44.174/api/travel/${travelId}/add`, {
        title: state.createStep.title,
        description: state.createStep.description,
        latitude: state.createStep.latitude,
        longitude: state.createStep.longitude,
        step_date: state.createStep.step_date,
        picture: state.createStep.picture,
        travel_id: state.createStep.travel_id,
      },
      { withCredentials: true })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
      next(action);
  }
};
export default CreateStep;
