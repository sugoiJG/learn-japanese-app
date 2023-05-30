import React from 'react'

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://just-translated.p.rapidapi.com/',
  params: {
    lang: 'fr',
    text: 'Hello, how are you?'
  },
  headers: {
    'X-RapidAPI-Key': 'f977b620c7msh7edc35cfaccd8b0p1c601fjsnb36e413da173',
    'X-RapidAPI-Host': 'just-translated.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

const Home = () => {
  return (
    <div>Translator</div>
  )
}

export default Home