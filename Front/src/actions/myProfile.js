export const FETCH_DATA_FOR_USER = 'FETCH_DATA_FOR_USER';
export const SAVE_DATA_FOR_USER = 'SAVE_DATA_FOR_USER';
export const CHANGE_FIELD_FOR_DATA_USER = 'CHANGE_FIELD_FOR_DATA_USER';
export const SEND_DATA_FOR_UPDATE_USER = 'SEND_DATA_FOR_UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const fetchDataForUser = () => ({
  type: FETCH_DATA_FOR_USER,
});

export const saveDataForUser = (value) => ({
  type: SAVE_DATA_FOR_USER,
  value,
});

export const changeFieldForDataUser = (value, name) => ({
  type: CHANGE_FIELD_FOR_DATA_USER,
  value,
  name,
});

export const sendDataForUpdateUser = () => ({
  type: SEND_DATA_FOR_UPDATE_USER,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});
