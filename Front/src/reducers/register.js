import { CHANGE_VALUE, SAVE_REGISTER_RESPONSE } from '../actions/register';

export const initialState = {
  last_name: '',
  first_name: '',
  email: '',
  password: '',
  verifyPassword: '',
  response: '',
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_REGISTER_RESPONSE:
      return {
        ...state,
        response: action.value,
      };
    default:
      return state;
  }
};

export default auth;
