import { Link } from "react-router-dom";
import { useState } from "react";
import logoImage from "../../assets/logo.png"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header>
      <nav className="bg-gray-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-semibold flex items-center">
            <img src={logoImage} alt="Logo" className="w-6 h-6 mr-2" />
            <span>Study Japanese!</span>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/hiragana"
                onClick={() => setActiveLink("Hiragana")}
                className={`${
                  activeLink === "Hiragana"
                    ? "border-b-2 border-blue-500"
                    : "text-white hover:text-blue-500"
                }`}
              >
                Hiragana
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => setActiveLink("Home")}
                className={`${
                  activeLink === "Home"
                    ? "border-b-2 border-blue-500"
                    : "text-white hover:text-blue-500"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/katakana"
                onClick={() => setActiveLink("Katakana")}
                className={`${
                  activeLink === "Katakana"
                    ? "border-b-2 border-blue-500"
                    : "text-white hover:text-blue-500"
                }`}
              >
                Katakana
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
