export const SAVE_DATA_TRAVELS_LIST = 'SAVE_DATA_TRAVELS_LIST';
export const SAVE_DATA_RESPONSE_TRAVELS_LIST = 'SAVE_DATA_RESPONSE_TRAVELS_LIST';

export const saveDateTravelsList = () => ({
  type: SAVE_DATA_TRAVELS_LIST,
});

export const saveDateResponseTravelsList = (value) => ({
  type: SAVE_DATA_RESPONSE_TRAVELS_LIST,
  value,
});
