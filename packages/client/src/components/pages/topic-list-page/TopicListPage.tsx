import { ITopicList } from '../../../interfaces/interfaces';
import TopicList from './components/TopicList';

export default function TopicListPage(props: { topics: ITopicList[] }) {
  const { topics } = props;

  return (
    <>
      {topics.map((topic) => (
        <TopicList key={topic.id} topic={topic} />
      ))}
    </>
  );
}
