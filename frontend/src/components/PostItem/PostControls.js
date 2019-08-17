import React from 'react';
// import { Link } from 'react-router-dom';


const PostControls = ({id, deleteFunc}) => {
  return(
    <div className="post-controls">
      <p className="post-button post-button-edit">Edit</p>
      <p className="post-button post-button-delete" onClick={deleteFunc}>Delete</p>
    </div>
  );
}



export default PostControls;
