import { useEffect, useState } from 'react';
import { mockFoldersTopics, mockTopics } from '../../constants/mocks';
import { ForumPage } from '../pages';
import { IFolderTopic, ITopicList } from '../../models/Forum';

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
