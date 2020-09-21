import { KEEP_DATA_FOR_UPDATE_TRAVEL, CHANGE_DATA_FOR_UPDATE_TRAVEL } from 'src/actions/updateTravel';

export const initialState = {
  title: '',
  description: '',
  creation_date: '',
  picture: [],
  response: '',
  status: true,
  loading: true,
};

const updateTravel = (state = initialState, action = {}) => {
  switch (action.type) {
    case KEEP_DATA_FOR_UPDATE_TRAVEL:
      return {
        ...state,
        title: action.value.title,
        description: action.value.description,
        creation_date: action.date,
        picture: action.value.pictureUrl,
        status: action.value.status,
        loading: false,
      };
    case CHANGE_DATA_FOR_UPDATE_TRAVEL:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default updateTravel;
