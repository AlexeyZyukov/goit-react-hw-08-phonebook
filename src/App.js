import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import { HomePage } from '../src/views';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </Container>
  );
}
