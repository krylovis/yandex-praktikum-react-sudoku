export interface Comment {
  id: number;
  text: string;
}

export interface Topic {
  id: number;
  title: string;
  content: string;
  comments?: Comment[];
}
