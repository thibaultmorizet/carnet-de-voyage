import { CHANGE_VALUE } from 'src/actions/createStep';

export const initialState = {
  title: '',
  description: '',
  latitude: '',
  longitude: '',
  step_date: '',
};

const createStep = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return state;
    default:
      return state;
  }
};

export default createStep;
