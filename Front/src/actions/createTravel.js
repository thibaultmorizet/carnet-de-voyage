export const CHANGE_FIELD_CREATE_TRAVEL = 'CHANGE_FIELD_CREATE_TRAVEL';
export const SAVE_DATA_CREATE_TRAVEL = 'SAVE_DATA_CREATE_TRAVEL';
export const SAVE_DATA_RESPONSE_CREATE_TRAVEL = 'SAVE_DATA_RESPONSE_CREATE_TRAVEL';

export const changeFieldCreateTravel = (value, name) => ({
  type: CHANGE_FIELD_CREATE_TRAVEL,
  value,
  name,
});

export const saveDateCreateTravel = () => ({
  type: SAVE_DATA_CREATE_TRAVEL,
});

export const saveDataResponseCreateTravel = (value) => ({
  type: SAVE_DATA_RESPONSE_CREATE_TRAVEL,
  value,
});
