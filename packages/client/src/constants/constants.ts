enum ROUTES {
  MAIN = '/main',
  SIGN_UP = '/signup',
  GAME = '/sudoku',
  LEADERBOARD = '/leaderboard',
  LOGIN = '/login',
  PROFILE = '/profile',
  TOPIC = '/forum/topic/:id',
  CREATE_TOPIC = '/forum/create',
  TOPICS = '/forum',
  TOPICS_LIST = '/forum/:id',
  INTERNAL_SERVER_ERROR = '/500',
  UNDEFINED = '*',
  NOT_FOUND_404 = '/404',
}

export default ROUTES;
