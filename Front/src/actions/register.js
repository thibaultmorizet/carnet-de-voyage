export const CHANGE_VALUE = 'CHANGE_VALUE';

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});
