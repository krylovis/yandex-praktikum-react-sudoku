import { Comment } from '../types/types';

interface CommentListProps {
  comments: Comment[];
}

function CommentList(props: CommentListProps) {
  const { comments } = props;
  return (
    <ul>
      {comments.map((comment: Comment) => (
        <li key={comment.id}>{comment.text}</li>
      ))}
    </ul>
  );
}

export default CommentList;
