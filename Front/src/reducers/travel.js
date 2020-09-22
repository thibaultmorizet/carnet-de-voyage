import {
  SAVE_DATA_FOR_SINGLE_TRAVEL, SAVE_DATA_FOR_SINGLE_STEP, ADD_COMMENT, FETCH_DATA_FOR_URL_SHARE,
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
};

// console.log('je passe dans le reducer');

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
    case FETCH_DATA_FOR_URL_SHARE:
      return {
        ...state,
        urlShare: action.value,
      };
    default:
      return state;
  }
};

export default travel;
