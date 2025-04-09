import { useNavigate } from 'react-router-dom';
import style from './MainPage.module.scss';
import ROUTES from '../../../constants/constants';
import CustomButton from '../../custom-button/CustomButton';

type Action = {
  text: string,
  onNavigate: () => void,
  style?: string,
};

export default function MainPage() {
  const navigate = useNavigate();

  const actions: Action[] = [
    {
      text: 'Продолжить',
      onNavigate: () => navigate(ROUTES.GAME),
    },
    {
      text: 'Новая игра',
      onNavigate: () => navigate(ROUTES.GAME),
    },
    {
      text: 'Личный кабинет',
      onNavigate: () => navigate(ROUTES.PROFILE),
    },
    {
      text: 'Таблица лидеров',
      onNavigate: () => navigate(ROUTES.LEADERBOARD),
    },
    {
      text: 'Форум',
      onNavigate: () => navigate(ROUTES.FORUM),
    },
  ];

  return (
    <section className={style.mainPage}>
      <span className={style.mainPage__title}>
        SUDOKU
      </span>
      <div className={style.mainPage__resultContainer}>
        <img src="src/assets/images/mainPage.png" alt="Result game" className={style.mainPage__result} />
      </div>
      <div className={style.mainPage__actions}>
        {actions.map(({ text, onNavigate }) => (
          <CustomButton
            className={[style.button]}
            type="button"
            color="secondary"
            text={text}
            onClick={onNavigate}
          />
        ))}
      </div>
    </section>
  );

export default function MainPage() {
  return <div className="main-page">Главная страница</div>;
}
