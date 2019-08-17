import React from 'react';
import { Field, reduxForm } from 'redux-form';

let CommentForm = (props) => {
  const { handleSubmit } = props
  return(
    <form onSubmit={handleSubmit}>
      <div className="body-container">
        <Field className="input" name="author" component="input" placeholder="Author" type="text" />
        <p></p>
        <Field className="input" name="body" component="textarea" placeholder="Comment" type="text" />
      </div>
      <button className="submit-button input" type="submit">Submit</button>
    </form>
  )
}

CommentForm = reduxForm({
  form: 'NewComment',
})(CommentForm);

export default CommentForm;
