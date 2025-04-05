import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  // Этот метод можно использовать для логирования ошибок
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.error('Ошибка в компоненте:', error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError, error } = this.state;
    if (hasError) {
      return (
        <div>
          <h2>Что-то пошло не так.</h2>
          <p>Попробуйте обновить страницу или вернуться позже.</p>
          {error && <pre>{error.toString()}</pre>}
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
