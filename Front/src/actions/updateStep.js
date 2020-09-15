export const FETCH_DATA_STEP = 'FETCH_DATA_STEP';
export const CHANGE_DATA_STEP = 'CHANGE_DATA_STEP';
export const SAVE_DATA_STEP = 'SAVE_DATA_STEP';

export const fetchDataStep = () => ({
  type: FETCH_DATA_STEP,
});

export const changeDataStep = (value, name) => ({
  type: CHANGE_DATA_STEP,
  value,
  name,
});

export const saveDataStep = (data) => {
  console.log('dara', data);
  return ({
    type: SAVE_DATA_STEP,
    data,
  });
};
