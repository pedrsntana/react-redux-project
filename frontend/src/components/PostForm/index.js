import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

let PostForm = (props) => {
  const { handleSubmit } = props
  return(
    <form onSubmit={handleSubmit}>
      <div className="hero">
        <Field className="category-input input" name="category" component="input" placeholder="CATEGORY" type="text" />
        <p></p>
        <Field className="title-input input" name="title" component="input" placeholder="Title" type="text" />
      </div>
      <div className="body-container">
        <Field className="author-input input" name="author" component="input" placeholder="Author" type="text" />
        <p></p>
        <Field className="body-input input" name="body" component="textarea" placeholder="Start writing here..." type="text" />
      </div>
      <button className="submit-button input" type="submit"><Link to="/">Submit</Link></button>
    </form>
  )
}

PostForm = reduxForm({
  form: 'NewPost',
})(PostForm);

export default PostForm;
