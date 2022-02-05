import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

const Navigation = () => (
  <NavLink to="/" exact="true" className={s.link}>
    Home
  </NavLink>
);

export default Navigation;
