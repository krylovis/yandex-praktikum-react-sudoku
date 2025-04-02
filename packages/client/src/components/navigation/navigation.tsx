import { Link } from 'react-router-dom';
import ROUTES from '../../constants/constants';

const navigationLinks = {
  [ROUTES.MAIN]: 'Главная',
  [ROUTES.GAME]: 'Страница игры',
  [ROUTES.SIGN_UP]: 'Страница регистрации',
  [ROUTES.LOGIN]: 'Страница входа',
  [ROUTES.FORUM]: 'Страница форума',
  [ROUTES.TOPIC]: 'Страница топика форума',
  [ROUTES.PROFILE]: 'Страница профиля пользователя',
  [ROUTES.LEADERBOARD]: 'Страница лидерборда',
};

export default function Navigation() {
  return (
    <nav>
      <ul>
        {Object.entries(navigationLinks).map(([route, label]) => (
          <li key={route}>
            <Link to={route}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
