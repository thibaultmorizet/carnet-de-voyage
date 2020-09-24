export const CHANGE_VALUE_COMMENT = 'CHANGE_VALUE_COMMENT';
export const SEND_COMMENT = 'SEND_COMMENT';
export const LIKE_STEP_FOR_TRAVEL = 'LIKE_STEP_FOR_TRAVEL';
export const UNLIKE_STEP_FOR_TRAVEL = 'UNLIKE_STEP_FOR_TRAVEL';
export const SAVE_LIKE_STEP_FOR_TRAVEL = 'SAVE_LIKE_STEP_FOR_TRAVEL';
export const SAVE_UNLIKE_STEP_FOR_TRAVEL = 'SAVE_UNLIKE_STEP_FOR_TRAVEL';

export const changeValueComment = (value, name) => ({
  type: CHANGE_VALUE_COMMENT,
  value,
  name,
});

export const sendComment = () => ({
  type: SEND_COMMENT,
});

export const likeStepForTravel = () => ({
  type: LIKE_STEP_FOR_TRAVEL,
});

export const unlikeStepForTravel = () => ({
  type: UNLIKE_STEP_FOR_TRAVEL,
});

export const saveLikeStepForTravel = () => ({
  type: SAVE_LIKE_STEP_FOR_TRAVEL,
});

export const saveUnlikeStepForTravel = () => ({
  type: SAVE_UNLIKE_STEP_FOR_TRAVEL,
});
