import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      Home
    </NavLink>
    <NavLink
      exact
      to="/register"
      className={s.link}
      activeClassName={s.activeLink}
    >
      Register
    </NavLink>
    <NavLink
      exact
      to="/login"
      className={s.link}
      activeClassName={s.activeLink}
    >
      Login
    </NavLink>
  </nav>
);

export default Navigation;
