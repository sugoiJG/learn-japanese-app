import { Link } from "react-router-dom";
import { useState } from "react";
import 'tailwindcss/tailwind.css';

const Navbar = () => {

  const [activeLink, setActiveLink] = useState("Home")


  return (
    <header>
          <nav className="flex justify-center py-4 border-gray-200 bg-gray-900">
      <ul className="flex justify-center space-x-6">
        <li onClick={()=> setActiveLink('Hiragana')}>
          <Link
            to="/hiragana"
            className={`${activeLink=='Hiragana' ? "border-b-2 border-blue-500" : ''}`}
          >
            Hiragana
          </Link>
        </li>
        <li onClick={()=> setActiveLink('Home')}>
          <Link
            to="/"
      
            className={`${activeLink=='Home' ? "border-b-2 border-blue-500" : ''}`}
          >
            Home
          </Link>
        </li>
        <li onClick={()=> setActiveLink('Katakana')}>
          <Link
            to="/katakana"
     
            className={`${activeLink=='Katakana' ? "border-b-2 border-blue-500" : ''}`}
          >
            Katakana
          </Link>
        </li>
      </ul>
    </nav>
    </header>

  );
};

export default Navbar;
