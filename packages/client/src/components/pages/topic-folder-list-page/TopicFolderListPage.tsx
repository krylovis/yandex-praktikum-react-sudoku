import TopicFoldersItem from './components/TopicFoldersItem';
import { IFolderTopic } from '../../../models/Forum';
import styles from './TopicFolderListPage.module.scss';

export default function TopicFolderListPage(props: {
  folders: IFolderTopic[];
}) {
  const { folders } = props;

  return (
    <ul className={styles.topic__container}>
      {folders.map((folder) => (
        <TopicFoldersItem key={folder.id} folder={folder} />
      ))}
    </ul>
  );
}
