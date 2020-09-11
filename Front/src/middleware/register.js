import axios from 'axios';
import { REGISTER } from '../actions/register';

const Register = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
      const state = store.getState();
      console.log(state.register.password);
      const data = {
        last_name: state.register.last_name,
        first_name: state.register.first_name,
        email: state.register.email,
        password: state.register.password,
      };
      const options = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': 'POST',
        },
      };
      const dataJSON = JSON.stringify(data);

      axios.post('http://127.0.0.1:8000/api/user/register', data, options,
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
