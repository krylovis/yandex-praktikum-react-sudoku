import { Link, useParams } from 'react-router-dom';
import styles from '../TopicListPage.module.scss';
import { ITopicList } from '../../../../interfaces/interfaces';

export default function TopicList(props: { topic: ITopicList }) {
  const { topic } = props;
  const { id } = useParams<{ id: string }>();
  const { card, info, preview, link, replies, title } = styles;

  if (!topic) return <div>Loading...</div>;

  return (
    <div className={card}>
      <div className={info}>
        <Link className={link} to={`/forum/${id}`}>
          <h3 className={title}>{topic.title}</h3>
        </Link>

        <span className={replies}>{topic.repliesCount}</span>
        <p className={preview}>{topic.lastPostPreview}</p>
      </div>
    </div>
  );
}
