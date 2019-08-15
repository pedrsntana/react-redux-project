import serverApi from 'services/serverApi';

export const actionTypes = {
  FETCH_POSTS_REQUEST: 'FETCH_POSTS_REQUEST',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_FAILURE: 'FETCH_POSTS_FAILURE',
  FETCH_POST_BY_ID_REQUEST: 'FETCH_POST_BY_ID_REQUEST',
  FETCH_POST_BY_ID_SUCCESS: 'FETCH_POST_BY_ID_SUCCESS',
  FETCH_POST_BY_ID_FAILURE: 'FETCH_POST_BY_ID_FAILURE',
  FETCH_POST_COMMENTS_REQUEST: 'FETCH_POST_COMMENTS_REQUEST',
  FETCH_POST_COMMENTS_SUCCESS: 'FETCH_POST_COMMENTS_SUCCESS',
  FETCH_POST_COMMENTS_FAILURE: 'FETCH_POST_COMMENTS_FAILURE',
}

const action = ( type, payload ) => ({ type, payload });

const actions = {
  fetchPosts: (payload = {}) => {
    return dispatch => {
      dispatch(action(actionTypes.FETCH_POSTS_REQUEST, payload));
      return serverApi
        .getPosts()
        .then(posts => dispatch(action(actionTypes.FETCH_POSTS_SUCCESS, { posts })))
        .catch(error => dispatch(action(actionTypes.FETCH_POSTS_FAILURE)));
    };
  },
  fetchPostById: (payload = {}) => {
    const id = payload;
    return dispatch => {
      dispatch(action(actionTypes.FETCH_POST_BY_ID_REQUEST, payload));
      return serverApi
        .getPostById(id)
        .then(postId => dispatch(action(actionTypes.FETCH_POST_BY_ID_SUCCESS, { postId })))
        .catch(error => dispatch(action(actionTypes.FETCH_POST_BY_ID_FAILURE)));
    }
  },
  fetchPostComments: (payload = {}) => {
    const id = payload;
    return dispatch => {
      dispatch(action(actionTypes.FETCH_POST_COMMENTS_REQUEST, payload));
      return serverApi
        .getPostComments(id)
        .then(postComments => dispatch(action(actionTypes.FETCH_POST_COMMENTS_SUCCESS, { postComments })))
        .catch(error => dispatch(action(actionTypes.FETCH_POST_COMMENTS_FAILURE)));
    }
  },
};

export default actions;
