import { CHANGE_VALUE_STEP, SAVE_STEP_VALUE, CHANGE_VALUE_PICTURE } from 'src/actions/createStep';

export const initialState = {
  title: '',
  description: '',
  latitude: 0,
  longitude: 0,
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
    case CHANGE_VALUE_PICTURE: {
      return {
        ...state,
        picture: action.value,
      }; }
    default:
      return state;
  }
};

export default createStep;
