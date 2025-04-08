import { useParams } from 'react-router-dom';
import styles from './ForumPage.module.scss';
import { TopicFolderListPage, TopicListPage } from '..';
import { IFolderTopic, ITopic, ITopicList } from '../../../models/Forum';
import { BackButton } from '../..';

interface ForumPageProps {
  folders: IFolderTopic[];
  topics: ITopicList[];
}

export default function ForumPage({ folders, topics }: ForumPageProps) {
  const { id } = useParams<{ id: string }>();
  const headerRowClass = id
    ? styles.page__headerList
    : styles.page__headerFolder;
  return (
    <div className={styles.page}>
      <BackButton />
      <div className={`${styles.page__header} ${headerRowClass}`}>
        {!id && <span className={styles.page__headerTitle}>Форумы</span>}
        <span
          className={
            id ? `${styles.page__headerSpan} ${styles.page__headerTitle}` : ''
          }
        >
          Темы
        </span>
        <span className={styles.page__headerSpan}>Ответы</span>
        <span className={styles.page__headerSpan}>Последняя тема</span>
      </div>
      <div className={styles.page__topicList}>
        {id ? (
          <TopicListPage
            topics={topics.filter(
              (topic: ITopic) => topic.parentId === Number(id)
            )}
          />
        ) : (
          <TopicFolderListPage folders={folders} />
        )}
      </div>
    </div>
  );
}
