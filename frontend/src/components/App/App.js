import React, { Component } from 'react';
import PostList from 'components/PostList';
import './App.scss'

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="App">
        <h1 className="page-title">{"//"} PedroNews</h1>
        <PostList list={posts}/>
      </div>
    );
  }
}

export default App;
