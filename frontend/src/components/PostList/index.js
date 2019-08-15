import React from 'react';
import PostItem from 'components/PostItem';
import './PostList.scss';


const PostList = ({ list }) =>
  <div className="posts-list container">
   {list.map(post => (
     <PostItem key={post.id} {...post}/>
   ))}
  </div>

export default PostList;
