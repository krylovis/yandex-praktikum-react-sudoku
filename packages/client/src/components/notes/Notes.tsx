import style from './Notes.module.scss';

interface NotesProps {
    notes: number[];
    size?: number;
}

function Notes(props: NotesProps) {
  const { notes = [], size = 40 } = props;

  return (
    <div
      className={style.parent}
      style={{ width: size, height: size }}
    >
      {notes.map((num) => {
        if (num < 1 || num > 9) return null;
        return (
          <div
            key={num}
            className={style[`div${num}`]}
          >
            {num}
          </div>
        );
      })}
    </div>
  );
}

export default Notes;
