import { NavLink } from 'react-router-dom';
import Book from './Book';

const Navbar = () => (
  <nav className="nav">
    <h1>BookStore</h1>
    <ul>
      <li>
        {' '}
        <NavLink to={Book}>Books</NavLink>
      </li>
      <li>
        categories
      </li>
    </ul>
  </nav>
);

export default Navbar;
