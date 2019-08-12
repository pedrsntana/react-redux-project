import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Page.scss';

class Home extends Component {
  render() {
    return(
      <div id="homepage" class="fluid-container">
        
      </div>
    );
  }
}

class NewPost extends Component {
  render() {
    return(
      <h1>New Post</h1>
    );
  }
}

class Categories extends Component {
  render() {
    return(
      <h1>Categories</h1>
    );
  }
}

export { Home, NewPost, Categories };
