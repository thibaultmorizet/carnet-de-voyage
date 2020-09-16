import axios from 'axios';
import { LOGIN } from '../actions/login';

const Login = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();

      axios.post('http://localhost:8000/api/login_check', {
        username: state.register.email,
        password: state.register.password,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export default Login;
