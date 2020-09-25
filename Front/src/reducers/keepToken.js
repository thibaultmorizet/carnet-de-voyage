import { KEEP_TOKEN, LOG_IN } from '../actions/keepToken';

export const initialState = {
  token: '',
  loggedIn: false,
};

const keepToken = (state = initialState, action = {}) => {
  switch (action.type) {
    case KEEP_TOKEN:
      return {
        ...state,
        token: action.value,
        loggedIn: !state.loggedIn,
      };
    default:
      return state;
  }
};

export default keepToken;
