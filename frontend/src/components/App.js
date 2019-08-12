import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, NewPost, Categories } from './Page/index';
import Header from './Header/index';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>

      <Route path="/" exact component={Home} />
      <Route path="/newpost" component={NewPost} />
      <Route path="/categories" component={Categories} />
    </Router>
  );
}

export default App;
