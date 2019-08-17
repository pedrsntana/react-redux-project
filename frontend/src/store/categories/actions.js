import serverApi from 'services/serverApi';

export const actionTypes = {
  FECTH_POST_CATEGORIES_REQUEST: 'FETCH_POST_CATEGORIES_REQUEST',
  FETCH_POST_CATEGORIES_SUCCESS: 'FETCH_POST_CATEGORIES_SUCCESS',
  FETCH_POST_CATEGORIES_FAILURE: 'FETCH_POST_CATEGORIES_FAILURE',
}

const action = (type, payload) => ({ type, payload });

const categoriesActions = {
  fetchCategories: (payload = {}) => {
    return dispatch(action(actionTypes.FETCH_POST_CATEGORIES_REQUEST, payload));
    return serverApi
      .getPostCategories()
      .then(postCategories => dispatch(action(actionTypes.FETCH_POST_CATEGORIES_SUCCESS, { postCategories })))
      .catch(error => dispatch(action(actionTypes.FECTH_POST_CATEGORIES_FAILURE, error)));
  }
}
