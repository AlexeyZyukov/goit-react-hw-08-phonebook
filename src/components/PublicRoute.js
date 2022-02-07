import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import authSelectors from '../redux/auth/auth-selectors';

export default function PublicRoute({ restricted = false, redirectTo = '/' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const redirect = isLoggedIn && restricted;

  return !redirect ? <Outlet /> : <Navigate to={redirectTo} />;
}
