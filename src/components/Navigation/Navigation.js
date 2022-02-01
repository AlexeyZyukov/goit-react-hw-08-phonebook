import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact to="/" activeClassName={s.activeLink}>
      Home
    </NavLink>
    <NavLink exact to="/register" activeClassName={s.activeLink}>
      Register
    </NavLink>
    <NavLink exact to="/login" activeClassName={s.activeLink}>
      Login
    </NavLink>
  </nav>
);

export default Navigation;
