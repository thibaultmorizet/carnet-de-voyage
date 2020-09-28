export const FETCH_DATA_STEP = 'FETCH_DATA_STEP';
export const CHANGE_DATA_STEP = 'CHANGE_DATA_STEP';
export const SAVE_DATA_STEP = 'SAVE_DATA_STEP';
export const DELETE_PICTURE_UPDATE = 'DELETE_PICTURE_UPDATE';
export const SAVE_PICTURE_UPDATE = 'SAVE_PICTURE_UPDATE';
export const SEND_DATA_UPDATE = 'SEND_DATA_UPDATE';
export const DELETE_STEP = 'DELETE_STEP';
export const RESPONSE_UPDATE_STEP = 'RESPONSE_UPDATE_STEP';
export const ERROR_UNTHORIZED_UPDATE_STEP = 'ERROR_UNTHORIZED_UPDATE_STEP';

export const fetchDataStep = () => ({
  type: FETCH_DATA_STEP,
});

export const changeDataStep = (value, name) => ({
  type: CHANGE_DATA_STEP,
  value,
  name,
});

export const saveDataStep = (data) => ({
  type: SAVE_DATA_STEP,
  data,
});

export const deletePictureUpdate = (value) => ({
  type: DELETE_PICTURE_UPDATE,
  value,
});

export const savePictureUpdate = (value, name) => ({
  type: SAVE_PICTURE_UPDATE,
  value,
  name,
});

export const sendDateUpdate = () => ({
  type: SEND_DATA_UPDATE,
});

export const deleteStep = () => ({
  type: DELETE_STEP,
});

export const responseUpdateStep = (value) => ({
  type: RESPONSE_UPDATE_STEP,
  value,
});

export const errorUnthorizedUpdateStep = () => ({
  type: ERROR_UNTHORIZED_UPDATE_STEP,
});
