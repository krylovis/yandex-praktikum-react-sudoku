import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import {
  SignupPage,
  GamePage,
  LeaderPage,
  LoginPage,
  MainPage,
  ProfilePage,
  TopicCreatePage,
  TopicPage,
  NotFoundPage,
  InternalServerErrorPage,
} from '../pages/index';
import ROUTES from '../../constants/constants';
import Navigation from '../navigation/NavigationComponent';
import ForumPageWrapper from '../forum-wrapper/ForumPageWrapper';

const hideNavigationOnRoutes: string[] = [
  ROUTES.SIGN_UP,
  ROUTES.TOPICS,
  ROUTES.GAME,
  ROUTES.LEADERBOARD,
  ROUTES.LOGIN,
  ROUTES.PROFILE,
  ROUTES.TOPIC,
  ROUTES.MAIN,
  ROUTES.CREATE_TOPIC,
  ROUTES.TOPICS_LIST,
  ROUTES.TOPIC,
];

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path={ROUTES.SIGN_UP} element={<SignupPage />} />
        <Route path={ROUTES.TOPIC} element={<TopicPage />} />
        <Route path={ROUTES.TOPICS_LIST} element={<ForumPageWrapper />} />
        <Route path={ROUTES.TOPICS} element={<ForumPageWrapper />} />
        <Route path={ROUTES.GAME} element={<GamePage />} />
        <Route path={ROUTES.LEADERBOARD} element={<LeaderPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.MAIN} element={<MainPage />} />
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        <Route path={ROUTES.CREATE_TOPIC} element={<TopicCreatePage />} />
        <Route path={ROUTES.INTERNAL_SERVER_ERROR} element={<InternalServerErrorPage />} />
        <Route path={ROUTES.NOT_FOUND_404} element={<NotFoundPage />} />
        <Route
          path={ROUTES.UNDEFINED}
          element={<Navigate to={ROUTES.NOT_FOUND_404} state={{ from: location }} replace />}
        />
        <Route
          path="/"
          element={(
            <>
              <div>Вот тут будет жить ваше приложение :)</div>
              <Navigation />
            </>
          )}
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
