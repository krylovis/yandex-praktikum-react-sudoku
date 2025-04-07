import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './TopicPage.module.scss';
import { mockTopic } from '../../../constants/mocks';
import { ITopic } from '../../../models/Forum';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import BackButton from '../../back-button/BackButton';

export default function TopicPage() {
  const { id } = useParams<{ id: string }>();
  const {
    page,
    container,
    authorInfo,
    authorAvatar,
    comments,
    comment,
    commentForm,
    sendButton,
    commentInput,
  } = styles;
  const [topic, setTopic] = useState<ITopic | null>(null);

  useEffect(() => {
    const foundTopic = mockTopic.find(
      (topicInfo: ITopic) => topicInfo.id === Number(id)
    );
    if (foundTopic) {
      setTopic(foundTopic);
    }
  }, [id]);

  const handleSubmit = useCallback((value: string) => {
    console.log(`Submit comment: ${value}`);
  }, []);

  if (!topic) return <div>Loading...</div>;

  return (
    <div className={page}>
      <BackButton />
      <div className={container}>
        <div className={authorInfo}>
          <img
            src={topic.author?.avatarUrl}
            alt={topic.author?.name}
            className={authorAvatar}
          />
        </div>

        <div>
          <h2>{topic.title}</h2>
          <p>{topic.content}</p>
        </div>

        <CommentList
          comments={topic.comments}
          commentsListClass={comments}
          commentClass={comment}
        />
        <CommentForm
          onSubmit={handleSubmit}
          inputClass={commentInput}
          formButtonClass={sendButton}
          formClass={commentForm}
        />
      </div>
    </div>
  );
}
