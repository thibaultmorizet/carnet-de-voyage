// /api/admin / user / list
import axios from 'axios';
import { FETCH_USER } from '../actions/user';

console.log('je passe ici');

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER: {
      const options = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          withCredentials: true,
        },
      };
      axios.get('http://localhost:8000/api/admin/user/list', options)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export default user;
