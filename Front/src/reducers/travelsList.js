import { CHANGE_FIELD_TRAVELS_LIST, SAVE_DATA_RESPONSE_TRAVELS_LIST } from 'src/actions/travelsList';

export const initialState = {
  title: '',
  description: '',
  picture: [],
  response: '',
};

const travelsList = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_TRAVELS_LIST:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_DATA_RESPONSE_TRAVELS_LIST:
      return {
        ...state,
        response: action.value,
      };
    default:
      return state;
  }
};

export default travelsList;
