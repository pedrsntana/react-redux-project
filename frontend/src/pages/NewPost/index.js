import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// styles
import 'styles/page.scss';

class NewPost extends Component {
  render() {
    return(
      <div className="page fluid-container">
        <div className="header">
          <Link to="/">BACK</Link>
        </div>
        <div className="hero fluid-container">
          <h1 className="post-title">New Post</h1>
        </div>
        <div className="col-md-8 offset-md-2">
          <form className="new-post-form">
            <p>Title</p>
            <input type="textfield"></input>
            <p>Body</p>
            <input type="textarea"></input>
            <p></p>
            <input type="submit"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default NewPost;
