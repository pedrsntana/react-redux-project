import React, { Component } from 'react';
import PostList from 'components/PostList';
import './App.scss'
import { Link } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="App">
        <div className="header"><Link to="/posts/new">+ New Post</Link></div>
        <div className="hero fluid-container">
          <h1 className="page-title">{"//"} News</h1>
        </div>
        <PostList list={posts} deleteFunc={this.props.deletePost}/>
      </div>
    );
  }
}

export default App;
