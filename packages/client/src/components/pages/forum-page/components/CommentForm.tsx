import React, { useState } from 'react';

interface CommentFormProps {
  onSubmit: (text: string) => void;
}

function CommentForm(props: CommentFormProps) {
  const { onSubmit } = props;
  const [text, setText] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Add a comment"
        value={text}
        onChange={(event) => setText(event.target.value)}
        required
      />
      <button type="submit">Add Comment</button>
    </form>
  );
}

export default CommentForm;
