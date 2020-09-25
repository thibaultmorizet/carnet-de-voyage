export const FETCH_DATA_FOR_SINGLE_TRAVEL = 'FETCH_DATA_FOR_SINGLE_TRAVEL';
export const ADD_COMMENT = 'ADD_COMMENT';
export const SAVE_DATA_FOR_SINGLE_TRAVEL = 'SAVE_DATA_FOR_SINGLE_TRAVEL';
export const SAVE_DATA_FOR_SINGLE_STEP = 'SAVE_DATA_FOR_SINGLE_STEP';
export const FETCH_DATA_FOR_GUEST = 'FETCH_DATA_FOR_GUEST';
export const FETCH_DATA_FOR_URL_SHARE = 'FETCH_DATA_FOR_URL_SHARE';
export const SAVE_DATA_FOR_URL_SHARE = 'SAVE_DATA_FOR_URL_SHARE';

export const fetchDataForSingleTravel = (id, token) => ({
  type: FETCH_DATA_FOR_SINGLE_TRAVEL,
  id,
  token,
});

export const saveDataForSingleTravel = (value) => ({
  type: SAVE_DATA_FOR_SINGLE_TRAVEL,
  value,
});

export const saveDataForSingleStep = (value, images, like, id, description, comment) => ({
  type: SAVE_DATA_FOR_SINGLE_STEP,
  value,
  images,
  like,
  id,
  description,
  comment,
});

export const addComment = (value, date) => ({
  type: ADD_COMMENT,
  value,
  date,
});

export const fetchDataForGuest = (id, slug) => ({
  type: FETCH_DATA_FOR_GUEST,
  id,
  slug,
});

export const fetchDataForUrlShare = (value) => ({
  type: FETCH_DATA_FOR_URL_SHARE,
  value,
});

export const saveDataForUrlShare = (value) => ({
  type: SAVE_DATA_FOR_URL_SHARE,
  value,
});

export const ERROR_UNTHORIZED_TRAVEL = 'ERROR_UNTHORIZED';

export const errorUnthorizedTravel = () => ({
  type: ERROR_UNTHORIZED_TRAVEL,
});
