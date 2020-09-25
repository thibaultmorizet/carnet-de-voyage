import axios from 'axios';
import Cookies from 'js-cookie';
import {
  SEND_COMMENT, LIKE_STEP_FOR_TRAVEL, saveLikeStepForTravel, UNLIKE_STEP_FOR_TRAVEL, saveUnlikeStepForTravel,
} from '../actions/comment';
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
    case LIKE_STEP_FOR_TRAVEL: {
      const state = store.getState();
      const token = Cookies.get('token');
      const idStep = state.travel.currentId;
      const idTravel = state.travel.travel.id;

      axios.get(`http://34.239.44.174/api/travel/${idTravel}/like/${idStep}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          store.dispatch(saveLikeStepForTravel());
        })
        .catch((error) => console.log(error));

      break;
    }
    case UNLIKE_STEP_FOR_TRAVEL: {
      const state = store.getState();
      const token = Cookies.get('token');
      const idStep = state.travel.currentId;
      const idTravel = state.travel.travel.id;

      axios.get(`http://34.239.44.174/api/travel/${idTravel}/unlike/${idStep}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          store.dispatch(saveUnlikeStepForTravel());
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
