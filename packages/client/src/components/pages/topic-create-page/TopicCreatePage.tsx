import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TopicCreatePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Created topic:', { title, content });
    navigate('/');
  };
  return (
    <div className="forum-page">
      <h1>Create a New Topic</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
