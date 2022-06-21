import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav>
    <NavLink
      exact="true"
      to="/"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      Get
    </NavLink>

    <NavLink
      to="/post"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      Post
    </NavLink>

    <NavLink
      to="/delete"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      Delete
    </NavLink>

    <NavLink
      to="/image"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      Images
    </NavLink>
  </nav>
);

export default Navigation;
