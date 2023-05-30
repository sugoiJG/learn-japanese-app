import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-6 py-4 border-gray-200 dark:bg-gray-900">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link
            to="/hiragana-quiz"
            activeClassName="border-b-2 border-blue-500"
            className="border-transparent"
          >
            Hiragana
          </Link>
        </li>
        <li>
          <Link
            to="/"
            activeClassName="border-b-2 border-blue-500"
            className="border-transparent"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/katakana-quiz"
            activeClassName="border-b-2 border-blue-500"
            className="border-transparent"
          >
            Katakana
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
