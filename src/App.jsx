import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HiraganaQuiz from './components/HiraganaQuiz';
import KatakanaQuiz from './components/KatakanaQuiz';
import Home from './components/Home';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-800 text-white text-center">
        <Navbar />
      <HiraganaQuiz/>
      <Routes>
          <Route path="/hiragana-quiz" component={HiraganaQuiz} />
          <Route path="/katakana-quiz" component={KatakanaQuiz} />
          <Route path="/" exact component={Home} />
      </Routes>
    </div>
  );
};

export default App;
