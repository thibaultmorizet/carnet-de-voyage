import { CHANGE_VALUE_STEP, SAVE_STEP_VALUE } from 'src/actions/createStep';

export const initialState = {
  title: '',
  description: '',
  latitude: '',
  longitude: '',
  step_date: '',
  picture: '',
  travel_id: '',
  response: '',
};

const createStep = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_STEP:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_STEP_VALUE:
      return {
        ...state,
        response: action.value,
      };
    default:
      return state;
  }
};

export default createStep;
