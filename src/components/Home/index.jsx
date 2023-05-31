import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputForm from '../InputForm';

const Home = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const makeTranslationRequest = async () => {
    axios
    const options = {
      method: 'GET',
      url: 'https://just-translated.p.rapidapi.com/',
      params: {
        lang: 'en-jp',
        text: inputText
      },
      headers: {
        'X-RapidAPI-Key': 'f977b620c7msh7edc35cfaccd8b0p1c601fjsnb36e413da173',
        'X-RapidAPI-Host': 'just-translated.p.rapidapi.com'
      }
    };

    try {
      const response = axios.request(options);
      setTranslatedText(response.data.translation);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    makeTranslationRequest();
  }, [inputText]);

  return (
    <div>
      <input className="text-black m-6"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <p>Translated Text: {translatedText}</p>
    </div>
  );
};

export default Home;
