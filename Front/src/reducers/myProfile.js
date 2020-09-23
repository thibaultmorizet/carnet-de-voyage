import { CHANGE_FIELD_FOR_DATA_USER, SAVE_DATA_FOR_USER } from 'src/actions/myProfile';

export const initialState = {
  id: '',
  lastname: '',
  firstname: '',
  password: '',
  email: '',
  verifyPassword: '',
  response: '',
  loading: true,
};

const myProfile = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_FOR_DATA_USER:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_DATA_FOR_USER:
      return {
        ...state,
        id: action.value.id,
        lastname: action.value.lastName,
        firstname: action.value.firstName,
        email: action.value.email,
        loading: false,
      };
    default:
      return state;
  }
};

export default myProfile;
