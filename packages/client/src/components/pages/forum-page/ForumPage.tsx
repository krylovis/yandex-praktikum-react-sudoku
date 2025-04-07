import { useParams } from 'react-router-dom';
import styles from './ForumPage.module.scss';
import { TopicFolderListPage, TopicListPage } from '..';
import { IFolderTopic, ITopicList } from '../../../models/Forum';
import BackButton from '../../back-button/BackButton';

interface ForumPageProps {
  folders: IFolderTopic[];
  topics: ITopicList[];
}

export default function ForumPage({ folders, topics }: ForumPageProps) {
  const { id } = useParams<{ id: string }>();
  const {
    page,
    headerRow,
    topicList,
    title,
    headerRowList,
    headerRowFolder,
  } = styles;
  const headerRowClass = id ? headerRowList : headerRowFolder;
  return (
    <div className={page}>
      <BackButton />
      <div className={`${headerRow} ${headerRowClass}`}>
        {!id && <span className={title}>Форумы</span>}
        <span className={id ? title : ''}>Темы</span>
        <span>Ответы</span>
        <span>Последняя тема</span>
      </div>
      <div className={topicList}>
        {id ? (
          <TopicListPage
            topics={topics.filter((topic) => topic.parentId === Number(id))}
          />
        ) : (
          <TopicFolderListPage folders={folders} />
        )}
      </div>
    </div>
  );
}
