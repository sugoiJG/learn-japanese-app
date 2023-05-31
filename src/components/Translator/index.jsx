import React, { useState, useEffect } from "react";
import axios from "axios";


const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  
//   const encodedParams = new URLSearchParams();
//   encodedParams.set("text", "hello");
//   encodedParams.set("to_lang", "ja");
//   encodedParams.set("from_lang", "en");



  const makeTranslationRequest = async () => {
    const options = {
        method: "POST",
        url: "https://google-translate105.p.rapidapi.com/v1/rapid/translate",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key": "f977b620c7msh7edc35cfaccd8b0p1c601fjsnb36e413da173",
          "X-RapidAPI-Host": "google-translate105.p.rapidapi.com",
        },
        data: {
            text: inputText,
            to_lang: "ja",
            from_lang: "en"
        },
      };
    try {
      const response = await axios(options);
      console.log(response.data.translated_text);
      setTranslatedText(response.data.translated_text)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    makeTranslationRequest();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    makeTranslationRequest();
  };

  return (
    <div>
      <textarea
        className="text-black w-80 mt-6 rounded-lg"
        type="text"
        disabled="disabled"
        value={translatedText}
        placeholder="Translated text..."
      ></textarea>

      <br />
      <form onSubmit={handleSubmit}>
        <input
          className="text-black w-80 m-6 focus:shadow-outline rounded-lg"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text to translate"
        />
        <button type="submit">Translate</button>
      </form>
    </div>
  );
};

export default Translator;
