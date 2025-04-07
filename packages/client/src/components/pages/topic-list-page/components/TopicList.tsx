import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import styles from '../TopicListPage.module.scss';
import { ITopic, ITopicList } from '../../../../models/Forum';

export default function TopicList(props: { topic: ITopicList }) {
  const { topic } = props;
  const topicCardId = useMemo(
    () =>
      topic.children.find(
        (topicCard: ITopic) => topicCard.parentId === Number(topic.id)
      )?.id,
    [topic.children, topic.id]
  );
  const { card, info, preview, link, replies, title } = styles;

  if (!topic) return <div>Loading...</div>;

  return (
    <div className={card}>
      <div className={info}>
        <Link className={link} to={`/forum/topic/${topicCardId}`}>
          <h3 className={title}>{topic.title}</h3>
        </Link>

        <span className={replies}>{topic.repliesCount}</span>
        <p className={preview}>{topic.lastPostPreview}</p>
      </div>
    </div>
  );
}
