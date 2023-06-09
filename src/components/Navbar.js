import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <h1>BookStore</h1>
    <ul>
      <li>
        <NavLink to="/">Books</NavLink>
      </li>
      <li>
        <NavLink to="Categories">Categories</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
