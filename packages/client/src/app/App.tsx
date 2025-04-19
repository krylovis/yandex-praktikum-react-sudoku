import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectAuth } from '../store/slices/userSlice';
import { fetchUserData } from '../store/slices/userExtraReducers';
import { AppDispatch } from '../store/index';
import ProtectedRoute from '../components/route/ProtectedRoute';
import { useAppSelector } from '../store/hooks';
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
import { AppHeader, ForumPageWrapper, Navigation } from '../components';
import ROUTES from '../constants/constants';

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
  const dispatch: AppDispatch = useDispatch();
  const loggedIn = useAppSelector((state) => selectAuth(state));

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <Routes>
        <Route
          path={ROUTES.LOGIN}
          element={
            !loggedIn ? (<LoginPage />) : (<Navigate to={ROUTES.PROFILE} />)
          }
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={
            !loggedIn ? (<SignupPage />) : (<Navigate to={ROUTES.PROFILE} />)
          }
        />

        <Route
          path={ROUTES.PROFILE}
          element={
            <ProtectedRoute loggedIn={loggedIn} element={ProfilePage} />
          }
        />

        <Route path={ROUTES.TOPIC} element={<TopicPage />} />
        <Route path={ROUTES.TOPICS_LIST} element={<ForumPageWrapper />} />
        <Route path={ROUTES.TOPICS} element={<ForumPageWrapper />} />
        <Route path={ROUTES.GAME} element={<GamePage />} />
        <Route path={ROUTES.LEADERBOARD} element={<LeaderPage />} />
        <Route path={ROUTES.MAIN} element={<MainPage />} />
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
            <div style={{ marginTop: '100px' }}>
              <div>Вот тут будет жить ваше приложение :)</div>
              <Navigation />
            </div>
          )}
        />
      </Routes>

      {/* Кнопка "Назад" для определённых страниц */}
      {hideNavigationOnRoutes.includes(location.pathname) && (
        <div style={{ position: 'absolute', top: '100px', left: 0, zIndex: 5 }}>
          <button type="button" onClick={() => navigate('/')}>
            Назад
          </button>
        </div>
      )}
    </>
  );
}

export default App;
