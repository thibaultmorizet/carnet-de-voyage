export const CHANGE_VALUE = 'CHANGE_VALUE';
export const REGISTER = 'REGISTER';

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const saveRegister = () => ({
  type: REGISTER,
});
