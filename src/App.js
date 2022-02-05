import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from './components/AppBar/AppBar';
import Loader from './components/Loader/Loader';
import Container from './components/Container/Container';
import HomePageView from './views/HomePageView/HomePageView';
import RegisterPageView from './views/RegisterPageView/RegisterPageView';
import LoginPageView from './views/LoginPageView/LoginPageView';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" exact="true" element={<HomePageView />} />
          <Route path="/register" element={<RegisterPageView />} />
          <Route path="/login" element={<LoginPageView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
