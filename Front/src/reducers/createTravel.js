import { CHANGE_FIELD_CREATE_TRAVEL } from 'src/actions/createTravel';

export const initialState = {
  title: '',
  description: '',
  creation_date: '',
  picture: '',
};

const createTravel = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_CREATE_TRAVEL:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default createTravel;
