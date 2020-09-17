export const CHANGE_VALUE_CONTACT = 'CHANGE_VALUE_CONTACT';
export const CHANGE_CHECKBOX_CONTACT = 'CHANGE_CHECKBOX_CONTACT';
export const SEND_EMAIL_CONTACT = 'SEND_EMAIL_CONTACT';

export const changeValueContact = (value, name) => ({
  type: CHANGE_VALUE_CONTACT,
  value,
  name,
});

export const changeCheckboxContact = () => ({
  type: CHANGE_CHECKBOX_CONTACT,
});

export const sendEmailContact = () => ({
  type: SEND_EMAIL_CONTACT,
});
