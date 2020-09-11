import { CHANGE_VALUE_STEP } from 'src/actions/createStep';

export const initialState = {
  title: '',
  description: '',
  latitude: '',
  longitude: '',
  step_date: '',
};

const createStep = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_STEP:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default createStep;
