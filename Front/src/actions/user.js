export const HAVE_USER = 'HAVE_USER';
export const FETCH_USER = 'FETCH_USER';

export const haveUser = () => ({
  type: HAVE_USER,
});

export const fetchUser = () => ({
  type: FETCH_USER,
});
