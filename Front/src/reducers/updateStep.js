import {
  CHANGE_DATA_STEP,
  SAVE_DATA_STEP,
  DELETE_PICTURE_UPDATE,
  SAVE_PICTURE_UPDATE,
  RESPONSE_UPDATE_STEP,
  ERROR_UNTHORIZED_UPDATE_STEP,
} from '../actions/updateStep';

export const initialState = {
  title: '',
  description: '',
  latitude: 0,
  longitude: 0,
  step_date: '',
  picture: [],
  travel_id: '',
  response: '',
  id: 0,
  type: 0,
  loading: true,
  pictures_delete: '',
  pictures_new: '',
  unthorizedResponse: true,
};

const updateStep = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_DATA_STEP:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_DATA_STEP:
      return {
        ...state,
        title: action.data.title,
        description: action.data.description,
        latitude: action.data.latitude,
        longitude: action.data.longitude,
        step_date: action.data.step_date,
        picture: action.data.AllPictures,
        id: action.data.id,
        travel_id: action.data.travelId,
        loading: false,
      };
    case DELETE_PICTURE_UPDATE:
      return {
        ...state,
        pictures_delete: [
          ...state.pictures_delete,
          { id: action.value },
        ],
      };
    case SAVE_PICTURE_UPDATE: {
      return {
        ...state,
        pictures_new: action.value,
      };
    }
    case RESPONSE_UPDATE_STEP:
      return {
        ...state,
        response: action.value,
      };
    case ERROR_UNTHORIZED_UPDATE_STEP:
      return {
        ...state,
        unthorizedResponse: false,
      };
    default:
      return state;
  }
};

export default updateStep;
