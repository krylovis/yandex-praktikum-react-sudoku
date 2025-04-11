import { ITopicList } from '../../../models/Forum';
import TopicList from './components/TopicList';
import styles from './TopicListPage.module.scss';

export default function TopicListPage(props: { topics: ITopicList[] }) {
  const { topics } = props;

  return (
    <ul className={styles.card__container}>
      {topics.map((topic) => (
        <TopicList key={topic.id} topic={topic} />
      ))}
    </ul>
  );
}
