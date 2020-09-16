export const FETCH_DATA_STEP = 'FETCH_DATA_STEP';
export const CHANGE_DATA_STEP = 'CHANGE_DATA_STEP';
export const SAVE_DATA_STEP = 'SAVE_DATA_STEP';
export const DELETE_PICTURE_UPDATE = 'DELETE_PICTURE_UPDATE';
export const SAVE_PICTURE_UPDATE = 'SAVE_PICTURE_UPDATE';
export const SEND_DATA_UPDATE = 'SEND_DATA_UPDATE';

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

export const deletePictureUpdate = (value) => {
  console.log('je suis dans actions');
  return ({
    type: DELETE_PICTURE_UPDATE,
    value,
  });
};

export const savePictureUpdate = (value, name) => {
  console.log(value, name);
  return ({
    type: SAVE_PICTURE_UPDATE,
    value,
    name,
  });
};

export const sendDateUpdate = () => ({
  type: SEND_DATA_UPDATE,
});
