export const FETCH_DATA_FOR_SINGLE_TRAVEL = 'FETCH_DATA_FOR_SINGLE_TRAVEL';

export const fetchDataForSingleTravel = () => ({
  type: FETCH_DATA_FOR_SINGLE_TRAVEL,
});

export const SAVE_DATA_FOR_SINGLE_TRAVEL = 'SAVE_DATA_FOR_SINGLE_TRAVEL';

export const saveDataForSingleTravel = (value) => ({
  type: SAVE_DATA_FOR_SINGLE_TRAVEL,
  value,
});

export const SAVE_DATA_FOR_SINGLE_STEP = 'SAVE_DATA_FOR_SINGLE_STEP';

export const saveDataForSingleStep = (value) => {
  console.log('vale', value);
  return ({
    type: SAVE_DATA_FOR_SINGLE_STEP,
    value,
  });
};
