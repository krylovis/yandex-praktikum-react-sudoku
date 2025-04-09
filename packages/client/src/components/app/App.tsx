import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import {
  SignupPage,
  ForumPage,
  GamePage,
  LeaderPage,
  LoginPage,
  MainPage,
  ProfilePage,
  TopicPage,
  NotFoundPage,
} from '../pages/index';
import ROUTES from '../../constants/constants';
import Navigation from '../navigation/NavigationComponent';

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
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path={ROUTES.SIGN_UP} element={<SignupPage />} />
        <Route path={ROUTES.FORUM} element={<ForumPage />} />
        <Route path={ROUTES.GAME} element={<GamePage />} />
        <Route path={ROUTES.LEADERBOARD} element={<LeaderPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.MAIN} element={<MainPage />} />
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        <Route path={ROUTES.TOPIC} element={<TopicPage />} />
        <Route path={ROUTES.NOT_FOUND_404} element={<NotFoundPage />} />
        <Route
          path={ROUTES.UNDEFINED}
          element={<Navigate to={ROUTES.NOT_FOUND_404} state={{ from: location }} replace />}
        />
      </Routes>

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
