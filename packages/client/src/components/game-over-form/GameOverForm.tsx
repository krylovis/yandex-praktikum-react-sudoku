import { useNavigate } from 'react-router-dom';
import style from './GameOverForm.module.scss';
import { CustomButton } from '../index';
import ROUTES from '../../constants/constants';

interface GameOverFormProps {
    countErrors: number;
    isOpen: boolean;
    handleRefreshField: () => void;
}

function GameOverForm(props: GameOverFormProps) {
  const { isOpen, countErrors, handleRefreshField } = props;
  const isWinGame = countErrors < 3;
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className={style.gameOverWrapper}>
      <div
        className={style.gameOverForm}
      >
        {isWinGame && (
          <>
            <p className={style.gameOverForm_title}>Вы победили!</p>

            <CustomButton
              className={[style.gameOverForm_button]}
              type="button"
              color="primary"
              text="Начать новую игру"
              onClick={() => handleRefreshField()}
            />
          </>
        )}

        {!isWinGame && (
          <>
            <p className={style.gameOverForm_title}>Вы проиграли</p>

            <CustomButton
              className={[style.gameOverForm_button]}
              type="button"
              color="primary"
              text="Повторить игру"
              onClick={() => handleRefreshField()}
            />

            <CustomButton
              className={[style.gameOverForm_button]}
              type="button"
              color="primary"
              text="Начать новую игру"
              onClick={() => handleRefreshField()}
            />
          </>
        )}

        <CustomButton
          className={[style.gameOverForm_button]}
          type="button"
          color="secondary"
          text="Главное меню"
          onClick={() => navigate(ROUTES.MAIN)}
        />
      </div>
    </div>
  );
}

export default GameOverForm;
