import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './pages/Home';

import Will from './pages/Will/Will-chat';
import Ben from './pages/BenChat';

import BenImages from './pages/BenImages';
import WillImages from './pages/WillImages';


import BenAPI from './pages/BenAPI';
import WillApi from './pages/Will/WillApi';

function App() {  


  return (
    <div className="App">
    <header className="App-header">
    <Router>
      <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          
          <Route path="/will" element={<Will />} />
          <Route path="/ben" element={<Ben />} />
          <Route path="/willapi" element={<WillApi />} />
          <Route path="/BenAPI" element={<BenAPI />} />
          <Route path="/WillImages" element={<WillImages />} />
          <Route path="/BenImages" element={<BenImages />} />
        </Routes>
        
    </Router>
        
  
    </header>
      </div>
  );
}
export default App;