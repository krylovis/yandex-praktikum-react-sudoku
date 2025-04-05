import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  AuthPage,
  ForumPage,
  GamePage,
  LeaderPage,
  LoginPage,
  MainPage,
  ProfilePage,
  TopicPage,
} from '../pages/index';
import ROUTES from '../../constants/constants';
import Navigation from '../navigation/NavigationComponent';

// eslint-disable-next-line object-curly-newline
const hideNavigationOnRoutes: string[] = [
  ROUTES.SIGN_UP,
  ROUTES.FORUM,
  ROUTES.GAME,
  ROUTES.LEADERBOARD,
  ROUTES.LOGIN,
  ROUTES.PROFILE,
  ROUTES.TOPIC,
  ROUTES.MAIN,
];

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const fetchServerData = async () => {
      // eslint-disable-next-line no-undef
      const url = `http://localhost:${__SERVER_PORT__}`;
      const response = await fetch(url);
      const data = await response.json();
      // eslint-disable-next-line no-console
      console.log(data);
    };

    fetchServerData();
  }, []);
  return (
    <>
      <Routes>
        <Route path={ROUTES.SIGN_UP} element={<AuthPage />} />
        <Route path={ROUTES.FORUM} element={<ForumPage />} />
        <Route path={ROUTES.GAME} element={<GamePage />} />
        <Route path={ROUTES.LEADERBOARD} element={<LeaderPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.MAIN} element={<MainPage />} />
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        <Route path={ROUTES.TOPIC} element={<TopicPage />} />
      </Routes>
      {!hideNavigationOnRoutes.includes(location.pathname) && (
        <div>Вот тут будет жить ваше приложение :)</div>
      )}
      {!hideNavigationOnRoutes.includes(location.pathname) && <Navigation />}
      {/* Кнопка "Назад" для определённых страниц */}
      {hideNavigationOnRoutes.includes(location.pathname) && (
        <div>
          <button type="button" onClick={() => navigate('/')}>
            Назад
          </button>
        </div>
      )}
    </>
  );
}

export default App;
