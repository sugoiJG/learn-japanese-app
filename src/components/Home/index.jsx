import React, { useState, useEffect } from 'react';
import Translator from "../Translator"
const Home = () => {


  return (
    <div>
      <h1>Japanese App</h1>
      <p>
        Welcome to my Japanese study app! Below you can begin translating English into Japanese!
        </p>
        <p>
        You can click the Hiragana and Katakana buttons at the top to begin a fun quiz!
        </p>
      <Translator />
    </div>
  );
};

export default Home;
