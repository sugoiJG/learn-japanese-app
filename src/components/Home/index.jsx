import React from "react";
import Translator from "../Translator";
import CharacterGrid from "../CharacterGrid";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 motion-safe:animate-fadeIn">
      <h1 className="text-4xl font-bold mb-4">Japanese App</h1>
      <p className="text-lg mb-6">
        Welcome to my Japanese study app! Start by translating English into
        Japanese below!
      </p>
      <Translator />
      <div className="mt-8 motion-safe:animate-fadeIn">
        <h2 className="text-2xl font-bold mb-4">Learn Hiragana and Katakana</h2>
        <p className="text-lg mb-4">
          Below you can take some time to study Hiragana and Katakana
          characters!
        </p>
        <p className="text-lg mb-4">
          When you feel confident with your knowledge, please click on{" "}
          <Link to="/hiragana" className="text-blue-500">
            {" "}
            Hiragana {" "}
          </Link>
          or{" "}
          <Link to="/katakana" className="text-blue-500">
            Katakana
          </Link>{" "}
          to begin a quiz.
        </p>
      </div>
      <CharacterGrid />
    </div>
  );
};

export default Home;
