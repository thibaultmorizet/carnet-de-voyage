import {
  SAVE_DATA_FOR_SINGLE_TRAVEL, SAVE_DATA_FOR_SINGLE_STEP, ADD_COMMENT, SAVE_DATA_FOR_URL_SHARE, ERROR_UNTHORIZED_TRAVEL,
} from '../actions/travel';

export const initialState = {
  travel: {
    id: '',
    title: '',
    description: '',
    creation_date: '',
  },
  step: [],
  title: '',
  description: '',
  currentPicture: null,
  like: 0,
  loading: true,
  currentId: 0,
  currentComment: [],
  urlShare: '',
  response: true,

};

const travel = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DATA_FOR_SINGLE_TRAVEL: {
      const {
        id, title, description, creationDate, steps,
      } = action.value;
      return {
        ...state,
        travel: {
          id,
          title,
          description,
          creation_date: creationDate,
        },
        step: steps,
        loading: false,
      };
    }
    case SAVE_DATA_FOR_SINGLE_STEP:
      return {
        ...state,
        title: action.value,
        currentPicture: action.images,
        like: action.like,
        currentId: action.id,
        description: action.description,
        currentComment: action.comment,
      };
    case ADD_COMMENT:
      return {
        ...state,
        currentComment: [
          ...state.currentComment,
          {
            id: action.value,
            createdAt: action.date,
            user: {
              firstName: 'Commentaire',
              lastName: 'en cours de validation',
            },
            comment: action.value,
          },
        ],
      };

    case SAVE_DATA_FOR_URL_SHARE:
      return {
        ...state,
        urlShare: action.value,
      };
    case ERROR_UNTHORIZED_TRAVEL:
      return {
        ...state,
        response: false,
      };
    default:
      return state;
  }
};

export default travel;
