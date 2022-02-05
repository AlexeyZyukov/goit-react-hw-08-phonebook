import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';
import AuthMenu from '../AuthMenu/AuthMenu';
import s from './AppBar.module.css';
// import { NavLink } from 'react-router-dom';

export default function AppBar() {
  return (
    <Container>
      <div className={s.barHeader}>
        <Navigation />
        <AuthMenu />
      </div>
      {/* <h1>Welcome!</h1> */}
    </Container>
  );
}
