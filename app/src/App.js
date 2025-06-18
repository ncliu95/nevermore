import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Will from './pages/Will-chat';
import Ben from './pages/BenChat';
import BenImages from './pages/BenImages';
import BenAPI from './pages/BenAPI';
import WillImages from './pages/WillImages';

import Navbar from './components/Navbar';

function App() {  


  return (
    <div className="App">
    <header className="App-header">
    <Router>
      <Navbar />
        <Routes>
          <Route path="/BenImages" element={<BenImages />} />
          <Route path="/will" element={<Will />} />
          <Route path="/ben" element={<Ben />} />
          <Route path="/BenAPI" element={<BenAPI />} />
          <Route path="/WillImages" element={<WillImages />} />
        </Routes>
        
    </Router>
        
  
    </header>
      </div>
  );
}
export default App;