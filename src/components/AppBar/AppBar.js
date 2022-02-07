import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';
import AuthMenu from '../AuthMenu/AuthMenu';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container>
      <div className={s.barHeader}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </div>
    </Container>
  );
}
