import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TopicPage from '../topic-page/TopicPage';
import { Topic } from './types/types';
import { mockTopics } from '../../../constants/mocks';

export default function ForumPage() {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    // Моковые данные для примера
    setTopics(mockTopics);
  }, []);

  return (
    <div className="forum-page">
      <h1>Forum</h1>
      <Link to="/create">
        <button type="button" style={{ marginBottom: '20px' }}>
          +
        </button>
      </Link>
      <div>
        {topics.map((topic) => (
          <TopicPage key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}
