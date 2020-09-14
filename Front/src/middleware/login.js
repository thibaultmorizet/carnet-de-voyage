import axios from 'axios';
import { LOGIN } from '../actions/login';

const Login = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();

      axios.post('http://34.239.44.174/api/login_check', {
        last_name: state.register.last_name,
        first_name: state.register.first_name,
        email: state.register.email,
        password: state.register.password,
      },
      { withCredentials: true })
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
