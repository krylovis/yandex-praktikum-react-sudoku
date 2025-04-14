import { useEffect, useState } from 'react';
import { mockFoldersTopics, mockTopics } from '../../constants/mocks';

import { IFolderTopic, ITopicList } from '../../models/Forum';
import ForumPage from '../../pages/forum-page/ForumPage';

export default function ForumPageWrapper() {
  const [folders, setFolders] = useState<IFolderTopic[]>([]);
  const [topics, setTopics] = useState<ITopicList[]>([]);

  useEffect(() => {
    // Загрузка моковых данных
    setFolders(mockFoldersTopics);
    setTopics(mockTopics);
  }, []);

  return <ForumPage folders={folders} topics={topics} />;
}
