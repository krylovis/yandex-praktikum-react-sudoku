import { IComment } from '../../../../interfaces/interfaces';

interface CommentListProps {
  comments: IComment[];
}

function CommentList(props: CommentListProps) {
  const { comments } = props;
  return (
    <ul>
      {comments.map((comment: IComment) => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </ul>
  );
}

export default CommentList;
