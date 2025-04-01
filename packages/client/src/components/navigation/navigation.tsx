import { Link } from 'react-router-dom';
import ROUTES from '../../constants/constants';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.MAIN}>Главная</Link>
        </li>
        <li>
          <Link to={ROUTES.GAME}>Страница игры</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_UP}>Страница регистрации</Link>
        </li>
        <li>
          <Link to={ROUTES.LOGIN}>Страница входа</Link>
        </li>
        <li>
          <Link to={ROUTES.FORUM}>Страница форума</Link>
        </li>
        <li>
          <Link to={ROUTES.TOPIC}>Страница топика форума</Link>
        </li>
        <li>
          <Link to={ROUTES.PROFILE}>Страница профиля пользователя</Link>
        </li>
        <li>
          <Link to={ROUTES.LEADERBOARD}>Страница лидерборда</Link>
        </li>
      </ul>
    </nav>
  );
}
