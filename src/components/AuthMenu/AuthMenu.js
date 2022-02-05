import { NavLink } from 'react-router-dom';
import s from './AuthMenu.module.css';

export default function AuthMenu() {
  return (
    <div>
      <NavLink
        exact="true"
        to="/register"
        className={s.link}
        // activeClassName={s.activeLink}
      >
        Register
      </NavLink>
      <NavLink
        exact="true"
        to="/login"
        className={s.link}
        // activeClassName={s.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
}
