import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from 'store';
// Pages
import SinglePost from 'pages/SinglePost';
// Components
import App from 'components/App';
// Styles
import 'styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';

import * as serviceWorker from 'serviceWorker';

const renderApp = () => {
  const store = configureStore();

  if (process.env.NODE_ENV !== 'production') {
    console.log('Initial State: ');
    console.log(store.getState());
  }

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={App} />
        <Route path="/:id" component={SinglePost} />
      </Router>
    </Provider>,
    document.getElementById('root'));
}

renderApp();
serviceWorker.unregister();
