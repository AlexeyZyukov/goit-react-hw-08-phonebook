import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomePage from './views/HomePage/HomePage';
import Register from './views/Register/Register';
import Login from './views/Login/Login';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" exact="true" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
  );
}
