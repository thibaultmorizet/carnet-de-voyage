import { CHANGE_DATA_STEP, SAVE_DATA_STEP, DELETE_PICTURE_UPDATE } from '../actions/updateStep';

export const initialState = {
  title: '',
  description: '',
  latitude: 0,
  longitude: 0,
  step_date: '',
  picture: '',
  travel_id: '',
  response: '',
  id: 0,
  type: 0,
  loading: true,
  picture_delete: '',
};

const updateStep = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_DATA_STEP:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_DATA_STEP: {
      console.log(action.data);
      return {
        ...state,
        title: action.data.title,
        description: action.data.description,
        latitude: action.data.latitude,
        longitude: action.data.longitude,
        step_date: action.data.step_date,
        picture: action.data.AllPictures,
        id: action.data.id,
        loading: false,
      }; }
    case DELETE_PICTURE_UPDATE:
      return {
        ...state,
        picture_delete: [
          ...state.picture_delete,
          { id: action.value },
        ],
      };
    default:
      return state;
  }
};

export default updateStep;
