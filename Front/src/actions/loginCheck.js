export const CHANGE_VALUE_CHECK = 'CHANGE_VALUE_CHECK';
export const CHECK = 'CHECK';

export const changeValueCheck = (value, name) => ({
  type: CHANGE_VALUE_CHECK,
  value,
  name,
});

export const saveLoginCheck = () => ({
  type: CHECK,
});
