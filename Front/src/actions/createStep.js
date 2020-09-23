export const CHANGE_VALUE_STEP = 'CHANGE_VALUE_STEP';
export const CHANGE_VALUE_PICTURE = 'CHANGE_VALUE_PICTURE';
export const SAVE_STEP = 'SAVE_STEP';
export const SAVE_STEP_VALUE = 'SAVE_STEP_VALUE';

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE_STEP,
  value,
  name,
});

export const saveStep = () => ({
  type: SAVE_STEP,
});

export const saveDataStep = (value) => ({
  type: SAVE_STEP_VALUE,
  value,
});

export const changeValuePicture = (value, name) => ({
  type: CHANGE_VALUE_PICTURE,
  value,
  name,
});
