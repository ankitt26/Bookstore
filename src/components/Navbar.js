import { NavLink } from "react-router-dom";
import Book from "./Book";
const Navbar = () => {
  return (
    <nav className="nav">
      <h1>BookStore</h1>
      <ul>
        <li>
          {" "}
          <NavLink to={Book}></NavLink>
        </li>
        <li>
          {" "}
          <NavLink to={Categories}></NavLink>
        </li>
      </ul>
    </nav>
  );
};
