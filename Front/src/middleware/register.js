import axios from 'axios';
import { REGISTER, saveRegisterResponse } from '../actions/register';

const Register = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
      const state = store.getState();
      const data = {
        last_name: state.register.last_name,
        first_name: state.register.first_name,
        email: state.register.email,
        password: state.register.password,
      };

      const dataJSON = JSON.stringify(data);

      axios.post('http://34.239.44.174/api/login/register', dataJSON)
        .then((response) => {
          const actioToDispatch = saveRegisterResponse('Success');
          store.dispatch(actioToDispatch);
        })
        .catch((error) => {
          const actioToDispatch = saveRegisterResponse('Error');
          store.dispatch(actioToDispatch);
        });
      break;
    }
    default:
      next(action);
  }
};
export default Register;
