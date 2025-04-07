import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './TopicPage.module.scss';
import { mockTopic } from '../../../constants/mocks';
import { ITopic } from '../../../interfaces/interfaces';
import BackButton from '../forum-page/components/BackButton';

export default function TopicPage() {
  const { id } = useParams<{ id: string }>();
  const { page, container, avatar } = styles;
  const [topic, setTopic] = useState<ITopic | null>(null);

  useEffect(() => {
    const foundTopic = mockTopic.find(
      (topicInfo: ITopic) => topicInfo.id === Number(id)
    );
    if (foundTopic) {
      setTopic(foundTopic);
    }
  }, [id]);

  if (!topic) return <div>Loading...</div>;

  return (
    <div className={page}>
      <BackButton />
      <div className={container}>
        <img
          src={topic.author?.avatarUrl}
          alt={topic.author?.name}
          className={avatar}
        />
        <div>
          <h2>{topic.title}</h2>
          <p>{topic.content}</p>
        </div>
      </div>
    </div>
  );
}
