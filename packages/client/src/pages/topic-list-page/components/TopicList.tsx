import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import styles from '../TopicListPage.module.scss';
import { ITopic, ITopicList } from '../../../models/Forum';

export default function TopicList(props: { topic: ITopicList }) {
  const { topic } = props;
  const topicCardId = useMemo(
    () =>
      topic.children.find(
        (topicCard: ITopic) => topicCard.parentId === Number(topic.id)
      )?.id,
    [topic.children, topic.id]
  );

  if (!topic) {
    return (
      <div className={styles.overlay}>
        <p className={styles.overlay__text}>Loading...</p>
      </div>
    );
  }

  return (
    <li className={styles.card}>
      <div className={styles.info}>
        <Link className={styles.link} to={`/forum/topic/${topicCardId}`}>
          <h3 className={styles.title}>{topic.title}</h3>
        </Link>

        <span className={styles.replies}>{topic.repliesCount}</span>
        <p className={styles.preview}>{topic.lastPostPreview}</p>
      </div>
    </li>
  );
}
