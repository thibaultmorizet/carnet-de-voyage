import axios from 'axios';
import { CHECK } from '../actions/loginCheck';
import { saveLogin, changeValue } from '../actions/login';

const Check = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECK: {
      const state = store.getState();

      axios.post('http://34.239.44.174/api/login/checkactivation', {
        username: state.register.email,
        password: state.register.password,
      })
        .then((response) => {
          store.dispatch(saveLogin());
        })
        .catch((error) => store.dispatch(changeValue('Error', 'response')));
      break;
    }
    default:
      next(action);
  }
};

export default Check;
