export const CHANGE_VALUE = 'CHANGE_VALUE';
export const REGISTER = 'REGISTER';
export const SAVE_REGISTER_RESPONSE = 'SAVE_REGISTER_RESPONSE';

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const saveRegister = () => ({
  type: REGISTER,
});

export const saveRegisterResponse = (value) => ({
  type: SAVE_REGISTER_RESPONSE,
  value,
});
