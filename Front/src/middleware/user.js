import axios from 'axios';
import { FETCH_USER } from '../actions/user';

console.log('je passe ici');

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER: {
     
      axios.get('http://localhost:8000/api/admin/user/list')
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export default user;
