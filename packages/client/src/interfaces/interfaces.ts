export interface IComment {
  id: number;
  text: string;
}

export interface ITopic {
  id: number;
  title: string;
  repliesCount: number;
}

export interface IFolderTopic extends ITopic{
  topicsCount: number;
  lastPostPreview: string;
  createUrl: string;
}

export interface ITopicList extends ITopic {
  parentId: number;
  lastPostPreview: string;
}
