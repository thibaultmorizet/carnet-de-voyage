import axios from 'axios';
import { LOGIN } from '../actions/login';
import { keepToken } from '../actions/keepToken';

const Login = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();

      axios.post('http://34.239.44.174/api/login_check', {
        last_name: state.register.last_name,
        first_name: state.register.first_name,
        username: state.register.email,
        password: state.register.password,
      })
        .then((response) => {
          const tokenString = JSON.parse(response.request.response);
          store.dispatch(keepToken(tokenString.token));
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};
export default Login;
