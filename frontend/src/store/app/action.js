export const actionTypes = {
  SHOW_POSTS: 'SHOW_POSTS',
};

const actions = {
  showPost: (payload = {}) => ({ type: actionTypes.SHOW_POSTS, payload}),
}

export default actions;
