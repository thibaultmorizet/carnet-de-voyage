import { SAVE_DATA_FOR_SINGLE_TRAVEL } from '../actions/travel';

export const initialState = {
  travel: {
    id: '',
    title: '',
    description: '',
    creation_date: '',
    loading: true,
  },
  step: {},
};

// console.log('je passe dans le reducer');

const travel = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DATA_FOR_SINGLE_TRAVEL: {
      console.log('action', action);
      const {
        id, title, description, creationDate, steps,
      } = action.value;
      console.log(action.id);
      return {
        ...state,
        travel: {
          id,
          title,
          description,
          creationDate,
          loading: !state.travel.loading,
        },
        step: steps,
      };
    }
    default:
      return state;
  }
};

export default travel;
