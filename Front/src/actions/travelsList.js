export const FETCH_DATA_TRAVELS_LIST = 'FETCH_DATA_TRAVELS_LIST';
export const SAVE_DATA_TRAVELS_LIST = 'SAVE_DATA_TRAVELS_LIST';

export const fetchDataTravelsList = () => ({
  type: FETCH_DATA_TRAVELS_LIST,
});

export const saveDataTravelsList = (travelsInProgress, travelsDone) => ({
  type: SAVE_DATA_TRAVELS_LIST,
  travelsInProgress,
  travelsDone,
});
