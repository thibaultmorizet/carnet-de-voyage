export const FETCH_DATA_FOR_SINGLE_TRAVEL = 'FETCH_DATA_FOR_SINGLE_TRAVEL';

export const fetchDataForSingleTravel = (id) => ({
  type: FETCH_DATA_FOR_SINGLE_TRAVEL,
  id,
});

export const SAVE_DATA_FOR_SINGLE_TRAVEL = 'SAVE_DATA_FOR_SINGLE_TRAVEL';

export const saveDataForSingleTravel = (value) => ({
  type: SAVE_DATA_FOR_SINGLE_TRAVEL,
  value,
});

export const SAVE_DATA_FOR_SINGLE_STEP = 'SAVE_DATA_FOR_SINGLE_STEP';

export const saveDataForSingleStep = (value, images, like, id, description, comment) => {
  console.log('vale', value);
  return ({
    type: SAVE_DATA_FOR_SINGLE_STEP,
    value,
    images,
    like,
    id,
    description,
    comment,
  });
};

export const ADD_COMMENT = 'ADD_COMMENT';

export const addComment = (value, date) => ({
  type: ADD_COMMENT,
  value,
  date,
});

// export const FETCH_ID_TRAVEL = 'FETCH_ID_TRAVEL';
// export const fetchIdTravel = (value) => ({
//   type: FETCH_ID_TRAVEL,
//   value,
// });
