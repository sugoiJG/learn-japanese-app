import { Link } from "react-router-dom";
import { useState } from "react";
import logoImage from "/Users/jg/Documents/PerScholas/japanese-study-app/japanese-study-app/src/assets/logo.png";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header>
      <nav className="bg-gray-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-semibold">
            <span>
          <img src={logoImage} alt="Logo" className="w-6 h-6 mr-2 content-center" />
          Study Japanese!
          </span>
          </Link>
          <ul className="flex space-x-6">
            <li
              onClick={() => setActiveLink("Hiragana")}
              className={`${
                activeLink === "Hiragana"
                  ? "border-b-2 border-blue-500"
                  : "text-white hover:text-blue-500"
              }`}
            >
              <Link to="/hiragana">Hiragana</Link>
            </li>
            <li
              onClick={() => setActiveLink("Home")}
              className={`${
                activeLink === "Home"
                  ? "border-b-2 border-blue-500"
                  : "text-white hover:text-blue-500"
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => setActiveLink("Katakana")}
              className={`${
                activeLink === "Katakana"
                  ? "border-b-2 border-blue-500"
                  : "text-white hover:text-blue-500"
              }`}
            >
              <Link to="/katakana">Katakana</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
