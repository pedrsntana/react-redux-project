import serverApi from 'services/serverApi';

export const actionTypes = {
  FETCH_POSTS_REQUEST: 'FETCH_POSTS_REQUEST',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_FAILURE: 'FETCH_POSTS_FAILURE',
  FETCH_POST_BY_ID_REQUEST: 'FETCH_POST_BY_ID_REQUEST',
  FETCH_POST_BY_ID_SUCCESS: 'FETCH_POST_BY_ID_SUCCESS',
  FETCH_POST_BY_ID_FAILURE: 'FETCH_POST_BY_ID_FAILURE',
  POST_NEW_POST_REQUEST: 'POST_NEW_POST_REQUEST',
  POST_NEW_POST_SUCCESS: 'POST_NEW_POST_SUCCESS',
  POST_NEW_POST_FAILURE: 'POST_NEW_POST_FAILURE',
  DELETE_POST_REQUEST: 'DELETE_POST_REQUEST',
  DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
  DELETE_POST_FAILURE: 'DELETE_POST_FAILURE',
}

const action = ( type, payload ) => ({ type, payload });

const postsActions = {
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
  createNewPost: (payload = {}) => {
    return dispatch => {
      dispatch(action(actionTypes.POST_NEW_POST_REQUEST, payload));
      return serverApi
        .postNewPost(payload)
        .then(post => dispatch(action(actionTypes.POST_NEW_POST_SUCCESS, { post })))
        .catch(error =>  dispatch(action(actionTypes.POST_NEW_POST_FAILURE)));
    }
  },
  deletePost: (payload = {}) => {
    const id = payload;
    return dispatch => {
      dispatch(action(actionTypes.DELETE_POST_REQUEST, payload));
      return serverApi
        .deletePost(id)
        .then(() => dispatch(action(actionTypes.DELETE_POST_SUCCESS)))
        .catch(error => dispatch(action(actionTypes.DELETE_POST_FAILURE)));
    }
  }
};

export default postsActions;
