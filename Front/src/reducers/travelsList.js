import { SAVE_DATA_TRAVELS_LIST } from '../actions/travelsList';

export const initialState = {
  travelsInProgress: [],
  travelsDone: [],
  loading: true,
};

const travelsList = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DATA_TRAVELS_LIST:
      return {
        ...state,
        travelsInProgress: action.travelsInProgress,
        travelsDone: action.travelsDone,
        loading: false,
      };
    default:
      return state;
  }
};

export default travelsList;
