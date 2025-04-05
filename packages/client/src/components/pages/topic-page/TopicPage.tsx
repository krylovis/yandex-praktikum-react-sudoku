import { Topic } from '../forum-page/types/types';

export default function TopicPage(props: { topic: Topic }) {
  const { topic } = props;
  return <div className="topic-page">Страница топика форума</div>;
}
