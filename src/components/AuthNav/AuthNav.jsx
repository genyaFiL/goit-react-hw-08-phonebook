import { NavLink, useLocation } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  const location = useLocation();
  const isActive = path => {
    return location.pathname === path;
  };
  return (
    <div className={css.wrapper}>
      <NavLink
        className={`${css.link} ${isActive('/register') ? css.active : ''}`}
        to="/register"
      >
        Registration
      </NavLink>
      <NavLink
        className={`${css.link} ${isActive('/login') ? css.active : ''}`}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};
