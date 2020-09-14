export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const saveLogin = () => ({
  type: LOGIN,
});
