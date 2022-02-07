import { NavLink } from 'react-router-dom';
import s from './AuthMenu.module.css';

export default function AuthMenu() {
  return (
    <div>
      <NavLink to="/register" exact="true" className={s.link}>
        Registration
      </NavLink>

      <NavLink to="/login" exact="true" className={s.link}>
        Login
      </NavLink>
    </div>
  );
}
