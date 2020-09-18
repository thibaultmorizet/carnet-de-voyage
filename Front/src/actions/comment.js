export const CHANGE_VALUE_COMMENT = 'CHANGE_VALUE_COMMENT';
export const SEND_COMMENT = 'SEND_COMMENT';

export const changeValueComment = (value, name) => ({
  type: CHANGE_VALUE_COMMENT,
  value,
  name,
});

export const sendComment = () => ({
  type: SEND_COMMENT,
});
