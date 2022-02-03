import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      exact="true"
      to="/"
      className={s.link}
      activeClassName={s.activeLink}
    >
      Home
    </NavLink>
    <NavLink
      exact="true"
      to="/register"
      className={s.link}
      activeClassName={s.activeLink}
    >
      Register
    </NavLink>
    <NavLink
      exact="true"
      to="/login"
      className={s.link}
      activeClassName={s.activeLink}
    >
      Login
    </NavLink>
  </nav>
);

export default Navigation;
