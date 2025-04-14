import style from './GameFieldButton.module.scss';

interface GameFieldButtonProps {
  srcImage: string;
  titleBtn: string;
  onClick: () => void;
}

function GameFieldButton({
  onClick,
  srcImage,
  titleBtn,
}: GameFieldButtonProps) {
  return (
    <button
      className={style.gameButton}
      onClick={() => onClick()}
      type="button"
    >
      <img
        src={srcImage}
        alt="Иконка кнопки"
        className={style.gameButton_image}
      />
      <p className={style.gameButton_title}>{titleBtn}</p>
    </button>
  );
}

export default GameFieldButton;
