import { CHANGE_VALUE } from '../actions/register';

export const initialState = {
  last_name: '',
  first_name: '',
  email: '',
  password: '',
  verifyPassword: '',
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default auth;
