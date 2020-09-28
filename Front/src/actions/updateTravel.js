export const FETCH_DATA_FOR_UPDATE_TRAVEL = 'FETCH_DATA_FOR_UPDATE_TRAVEL';
export const KEEP_DATA_FOR_UPDATE_TRAVEL = 'KEEP_DATA_FOR_UPDATE_TRAVEL';
export const CHANGE_DATA_FOR_UPDATE_TRAVEL = 'CHANGE_DATA_FOR_UPDATE_TRAVEL';
export const SEND_DATA_FOR_UPDATE_TRAVEL = 'SEND_DATA_FOR_UPDATE_TRAVEL';
export const DELETE_TRAVEL = 'DELETE_TRAVEL';
export const ERROR_UNTHORIZED_UPDATE_TRAVEL = 'ERROR_UNTHORIZED_UPDATE_TRAVEL';

export const fetchDataForUpdateTravel = () => ({
  type: FETCH_DATA_FOR_UPDATE_TRAVEL,
});

export const keepDataForUpdateTravel = (value, date) => ({
  type: KEEP_DATA_FOR_UPDATE_TRAVEL,
  value,
  date,
});

export const changeDateForUpdateTravel = (value, name) => ({
  type: CHANGE_DATA_FOR_UPDATE_TRAVEL,
  value,
  name,
});

export const sendDataForUpdateTravel = () => ({
  type: SEND_DATA_FOR_UPDATE_TRAVEL,
});

export const deleteTravel = (id) => ({
  type: DELETE_TRAVEL,
  id,
});

export const errorUnthorizedUpdateTravel = () => ({
  type: ERROR_UNTHORIZED_UPDATE_TRAVEL,
});
