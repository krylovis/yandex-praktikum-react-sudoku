import style from './GameFieldButton.module.scss';

interface GameFieldButtonProps {
    count?: number;
    isHighlight?: boolean;
    onClick: () => void;
    srcImage: string;
    titleBtn: string;
}

function GameFieldButton({
  count,
  isHighlight,
  onClick,
  srcImage,
  titleBtn,
}: GameFieldButtonProps) {
  const buttonClass: string = !isHighlight ? style.gameButton : `${style.gameButton} ${style.gameButton_active}`;

  return (
    <button
      className={buttonClass}
      onClick={() => onClick()}
      type="button"
    >
      <img
        src={srcImage}
        alt="Иконка кнопки"
        className={style.gameButton_image}
      />
      <p className={style.gameButton_title}>{titleBtn}</p>
      {count !== undefined && (
        <span className={style.gameButton_count}>{count}</span>
      )}
    </button>
  );
}

export default GameFieldButton;
