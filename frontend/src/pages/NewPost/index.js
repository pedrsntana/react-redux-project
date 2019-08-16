import React, { Component } from 'react';
import actions from 'store/posts/actions.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// components
import PostForm from 'components/PostForm';
// styles
import 'styles/page.scss';
import './NewPost.scss';

class NewPost extends Component {
  submit = values => {
    this.props.createNewPost({
      id: Date.now().toString(),
      category: values.category,
      title: values.title,
      author: values.author,
      body: values.body,
      voteScore: 0,
      commentCount: 0,
    });
  }

  render() {
    return(
      <div className="page fluid-container">
        <div className="header">
          <Link to="/">BACK</Link>
        </div>

        <div className="form-container">
          <PostForm onSubmit={this.submit} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newPost: state.posts.newPost,

  }
};

const mapDispatchToProps = (dispatch, ) => {
  return {
    createNewPost: (values) => dispatch(actions.createNewPost(values)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
