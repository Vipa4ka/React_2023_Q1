import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.activeStyle : styles.navigation)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? styles.activeStyle : styles.navigation)}
      >
        About Us
      </NavLink>
      <NavLink
        to="/forms"
        className={({ isActive }) => (isActive ? styles.activeStyle : styles.navigation)}
      >
        Forms
      </NavLink>
    </nav>
  );
}

export default Navigation;
