import axios from 'axios';
import { CHECK } from '../actions/loginCheck';
import { saveLogin } from '../actions/login';

const Check = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECK: {
      const state = store.getState();

      axios.post('http://localhost:8000/api/login/checkactivation', {
        username: state.register.email,
        password: state.register.password,
      })
        .then((response) => {
          console.log('response');
          store.dispatch(saveLogin());
        })
        .catch((error) => console.log('error'));
      break;
    }
    default:
      next(action);
  }
};

export default Check;
