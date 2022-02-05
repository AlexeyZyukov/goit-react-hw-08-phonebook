import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomePageView from './views/HomePageView/HomePageView';
import RegisterPageView from './views/RegisterPageView/RegisterPageView';
import LoginPageView from './views/LoginPageView/LoginPageView';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" exact="true" element={<HomePageView />} />
        <Route path="/RegisterPageView" element={<RegisterPageView />} />
        <Route path="/LoginPageView" element={<LoginPageView />} />
      </Routes>
    </Container>
  );
}
