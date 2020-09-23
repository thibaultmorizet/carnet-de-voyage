import axios from 'axios';
import { LOGIN, changeValue } from '../actions/login';
import { keepToken, login } from '../actions/keepToken';

const Login = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();

      axios.post('http://34.239.44.174/api/login_check', {
        username: state.register.email,
        password: state.register.password,
      })
        .then((response) => {
          const tokenString = JSON.parse(response.request.response);
          store.dispatch(keepToken(tokenString.token));
        })
        .catch((error) => store.dispatch(changeValue('Error', 'response')));
      break;
    }
    default:
      next(action);
  }
};

export default Login;
