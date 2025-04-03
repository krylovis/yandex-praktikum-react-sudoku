import ErrorBoundary from '../../utils';

export default function MainPage() {
  return (
    <div className="main-page">
      <ErrorBoundary>Главная страница</ErrorBoundary>
    </div>
  );
}
