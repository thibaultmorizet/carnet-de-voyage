import { CHANGE_VALUE_CONTACT, CHANGE_CHECKBOX_CONTACT } from 'src/actions/contact';

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
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_CHECKBOX_CONTACT:
      return {
        ...state,
        checked: !state.checked,
      };
    default:
      return state;
  }
};

export default contact;
