import { CHANGE_VALUE } from '../actions/login';

export const initialState = {
  email: '',
  password: '',
  response: '',
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
