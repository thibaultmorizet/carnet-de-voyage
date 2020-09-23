import axios from 'axios';
import Cookies from 'js-cookie';
import { SEND_COMMENT } from '../actions/comment';
import { addComment } from '../actions/travel';

const comment = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_COMMENT: {
      const state = store.getState();
      const token = Cookies.get('token');
      const idStep = state.travel.currentId;
      const idTravel = state.travel.travel.id;

      axios.post(`http://34.239.44.174/api/travel/${idTravel}/comment/${idStep}`, {
        comment: state.comment.message,
      }, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          const today = new Date();
          const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
          store.dispatch(addComment(state.comment.message, date));
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
