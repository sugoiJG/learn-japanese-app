import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HiraganaQuiz from './components/HiraganaQuiz';
import KatakanaQuiz from './components/KatakanaQuiz';
import Home from './components/Home'
import 'tailwindcss/tailwind.css'


const App = () => {
  return (
    <div className="min-h-screen bg-slate-800 text-white text-center">
        <Navbar />
      {/* <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/hiragana" element={<HiraganaQuiz/>} />
        <Route path="/katakana" element={<KatakanaQuiz/>} /> 
      </Routes> */}
    </div>
  );
};

export default App;
