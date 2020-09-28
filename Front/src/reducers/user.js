import { HAVE_USER } from '../actions/user';

export const initialState = {
  last_name: '',
  first_name: '',
  email: '',
  password: '',
  role: '',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case HAVE_USER:
      return state;
    default:
      return state;
  }
};

export default user;
