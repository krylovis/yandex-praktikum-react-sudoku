import { IComment } from '../../../models/Forum';

interface CommentListProps {
  comments: IComment[] | undefined;
  commentsListClass: string;
  commentClass: string;
}

function CommentList(props: CommentListProps) {
  const { comments, commentsListClass, commentClass } = props;

  if (!comments) return <div>Пока что нет комментариев</div>;
  return (
    <ul className={commentsListClass}>
      {comments.map((comment: IComment) => (
        <li className={commentClass} key={comment.id}>
          {comment.content}
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
