import React from 'react';
// components
import PostContent from "./PostContent";
import PostMeta from "./PostMeta";
import PostControls from "./PostControls";
// styles
import './PostItem.scss';

const PostItem = ({id, title, author, category, voteScore, commentCount}) => {
  return(
    <div className="post col-md-3">
      <PostContent id={id} category={category} title={title} author={author} />
      <PostMeta voteScore={voteScore} commentCount={commentCount} />
      <PostControls />
    </div>
  );
}

export default PostItem;
