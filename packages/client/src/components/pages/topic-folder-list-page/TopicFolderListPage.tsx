import TopicFoldersList from './components/TopicFoldersList';
import { IFolderTopic } from '../../../interfaces/interfaces';

export default function TopicFolderListPage(props: {
  folders: IFolderTopic[];
}) {
  const { folders } = props;

  return (
    <>
      {folders.map((folder) => (
        <TopicFoldersList key={folder.id} folder={folder} />
      ))}
    </>
  );
}
