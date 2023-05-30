import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HiraganaQuiz from './components/HiraganaQuiz';
import Home from './components/Home';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-800 text-white text-center">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/hiragana-quiz" component={HiraganaQuiz} />
          <Route path="/katakana-quiz" component={KatakanaQuiz} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
