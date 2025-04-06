import { Route, Routes } from 'react-router-dom';
import { memo } from 'react';
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

function App() {
  return (
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
  );
}

export default memo(App);
