import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-6 py-4 border-gray-200 dark:bg-gray-900">
      <ul className="flex justify-center space-x-6">
        <li>
          <NavLink
            to="/hiragana-quiz"
            activeClassName="border-b-2 border-blue-500"
            className="border-transparent"
          >
            Hiragana
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            activeClassName="border-b-2 border-blue-500"
            className="border-transparent"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/katakana-quiz"
            activeClassName="border-b-2 border-blue-500"
            className="border-transparent"
          >
            Katakana
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
