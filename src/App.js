import { Routes, Route } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import AppBar from './components/AppBar/AppBar';
import Spinner from './components/Loader/Loader';
import Container from './components/Container/Container';

const HomePageView = lazy(() => import('./views/HomePageView/HomePageView'));
const RegisterPageView = lazy(() =>
  import('./views/RegisterPageView/RegisterPageView'),
);
const LoginPageView = lazy(() => import('./views/LoginPageView/LoginPageView'));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(authOperations.fetchCurrentUser()), [dispatch]);
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePageView />} />
          <Route
            path="/register"
            element={<PublicRoute restricted redirectTo="/contacts" />}
          >
            <Route path="/register" element={<RegisterPageView />} />
          </Route>
          <Route
            path="/login"
            element={<PublicRoute restricted redirectTo="/contacts" />}
          >
            <Route path="/login" element={<LoginPageView />} />
          </Route>
          <Route element={<PrivateRoute path="/contacts" redirectTo="/" />}>
            <Route path="/contacts" element={<ContactsView />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
