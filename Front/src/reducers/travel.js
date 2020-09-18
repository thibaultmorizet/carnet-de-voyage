import { SAVE_DATA_FOR_SINGLE_TRAVEL, SAVE_DATA_FOR_SINGLE_STEP } from '../actions/travel';

export const initialState = {
  travel: {
    id: '',
    title: '',
    description: '',
    creation_date: '',
  },
  step: {},
  title: '',
  description: '',
  currentPicture: null,
  like: '',
  loading: true,
  currentId: '',
  currentComment: null,
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
        loading: !state.loading,
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
    default:
      return state;
  }
};

export default travel;
