import { CHANGE_FIELD_CREATE_TRAVEL, SAVE_DATA_RESPONSE_CREATE_TRAVEL } from 'src/actions/createTravel';

export const initialState = {
  title: '',
  description: '',
  creation_date: '',
  picture: [],
  response: '',
};

const createTravel = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_CREATE_TRAVEL:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_DATA_RESPONSE_CREATE_TRAVEL:
      return {
        ...state,
        response: action.value,
      };
    default:
      return state;
  }
};

export default createTravel;
