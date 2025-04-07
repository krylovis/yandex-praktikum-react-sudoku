import { Link } from 'react-router-dom';
import style from '../TopicFolderListPage.module.scss';
import { IFolderTopic } from '../../../../models/Forum';

export default function TopicFoldersList(props: { folder: IFolderTopic }) {
  const { folder } = props;
  const {
    card,
    info,
    stats,
    preview,
    createButton,
    link,
    replies,
    title,
  } = style;

  return (
    <div className={card}>
      <div className={info}>
        <Link className={link} to={`/forum/${folder.id}`}>
          <h3 className={title}>{folder.title}</h3>
        </Link>

        <div className={stats}>
          <span>{folder.topicsCount}</span>
          <Link className={link} to="/forum/create">
            <button
              type="button"
              className={createButton}
              onClick={() => console.log('Create new topic')}
            >
              +
            </button>
          </Link>
        </div>

        <span className={replies}>{folder.repliesCount}</span>
        <p className={preview}>{folder.lastPostPreview}</p>
      </div>
    </div>
  );
}
