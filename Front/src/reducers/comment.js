import { CHANGE_VALUE_COMMENT } from 'src/actions/comment';

export const initialState = {
  message: '',
};

const comment = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_COMMENT:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default comment;
