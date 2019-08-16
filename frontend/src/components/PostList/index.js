import React from 'react';
import PostItem from 'components/PostItem';
import './PostList.scss';


const PostList = ({ list, deleteFunc }) =>
  <div className="posts-list container">
   {list.map(post => (
     <PostItem key={post.id} {...post} deleteFunc={deleteFunc} />
   ))}
  </div>

export default PostList;
