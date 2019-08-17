import React from 'react';
import PostItem from 'components/PostItem';
import './PostList.scss';


const PostList = ({ postList, deleteFunc }) =>
  <div>
    <div className="categories-list">

    </div>
    <div className="posts-list container">
     {postList.map(post => (
       <PostItem key={post.id} {...post} deleteFunc={deleteFunc} />
     ))}
    </div>
  </div>


export default PostList;
