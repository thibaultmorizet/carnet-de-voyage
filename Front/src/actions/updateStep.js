export const FETCH_DATA_STEP = 'FETCH_DATA_STEP';
export const CHANGE_DATA_STEP = 'CHANGE_DATA_STEP';
export const SAVE_DATA_STEP = 'SAVE_DATA_STEP';
export const DELETE_PICTURE_UPDATE = 'DELETE_PICTURE_UPDATE';

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

export const deletePictureUpdate = (value) => ({
  type: DELETE_PICTURE_UPDATE,
  value,
});
