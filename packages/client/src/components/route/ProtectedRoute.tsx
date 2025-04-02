/* eslint-disable react/jsx-props-no-spreading */
import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import ROUTES from '../../constants/constants';

interface ProtectedRouteProps<P> {
  element: ComponentType<P>;
  loggedIn: boolean;
}

export default function ProtectedRoute<P extends object>({
  element: Component,
  loggedIn,
  ...props
}: ProtectedRouteProps<P> & P) {
  return loggedIn ? (
    <Component {...(props as P)} />
  ) : (
    <Navigate to={ROUTES.LOGIN} replace />
  );
}
