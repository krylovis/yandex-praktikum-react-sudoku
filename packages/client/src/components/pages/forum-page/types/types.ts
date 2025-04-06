export interface Comment {
  id: number;
  text: string;
}

export interface Topic {
  id: number;
  title: string;
  repliesCount: number;
}

export interface FolderTopic extends Topic{
  topicsCount: number;
  lastPostPreview: string;
  createUrl: string;
}

export interface TopicList extends Topic {
  parentId: number;
  lastPostPreview: string;
}
