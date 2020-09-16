import { CHANGE_VALUE_CONTACT } from 'src/actions/contact';

export const initialState = {
  email: '',
  objet: '',
  message: '',
  checked: false,
  response: '',

};

const contact = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_CONTACT:
      return state;
    default:
      return state;
  }
};

export default contact;
