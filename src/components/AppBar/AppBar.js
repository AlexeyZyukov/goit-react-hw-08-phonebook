import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthMenu from '../AuthMenu/AuthMenu';
import s from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <div className={s.barHeader}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </div>
    </header>
  );
};

export default AppBar;
