import { NavLink } from 'react-router-dom';
import styles from '../CSS/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <h1>BookStore</h1>
    <ul>
      <li>
        <NavLink to="/" className={styles.books}>Books</NavLink>
      </li>
      <li>
        <NavLink to="Categories" className={styles.categories}>Categories</NavLink>
      </li>
    </ul>
    <span className={styles.user}><i className="fa-solid fa-user" /></span>

  </nav>
);

export default Navbar;
