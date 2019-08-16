import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import app from './app/reducer';
import posts from './posts/reducer';
import comments from './comments/reducer';

const rootReducer = combineReducers({
  app,
  posts,
  comments,
  form: formReducer,
});

export default rootReducer;
