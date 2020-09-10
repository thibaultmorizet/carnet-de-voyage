import axios from 'axios';
import { REGISTER } from 'src/actions/register';

const Register = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
      const state = store.getState();

      axios.post('http://127.0.0.1:8000/api/user/register', {
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
export default Register;
