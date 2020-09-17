import { HAVE_USER } from '../actions/user';

export const initialState = {
  last_name: 'je suis un boulet',
  first_name: '',
  email: '',
  password: '',
  role: '',
};

// console.log('je passe dans le reducer');

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case HAVE_USER:
      return state;
    default:
      return state;
  }
};

export default user;
