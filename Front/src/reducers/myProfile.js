import { CHANGE_FIELD_FOR_DATA_USER, SAVE_DATA_FOR_USER } from 'src/actions/myProfile';

export const initialState = {
  lastname: '',
  firstname: '',
  password: '',
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
        loading: false,
      };
    default:
      return state;
  }
};

export default myProfile;
