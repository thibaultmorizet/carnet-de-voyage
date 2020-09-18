import axios from 'axios';
import Cookies from 'js-cookie';
import { SEND_COMMENT } from '../actions/comment';

const comment = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_COMMENT: {
      const state = store.getState();
      const token = Cookies.get('token');
      const idStep = state.travel.currentId;
      const idTravel = state.travel.travel.id;
      console.log('state', idStep, idTravel);

      axios.post(`http://34.239.44.174/api/travel/${idTravel}/comment/${idStep}`, {
        comment: state.comment.message,
      }, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export default comment;

// /api/travel/{id}/comment/{id2}
