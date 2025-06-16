import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Will from './pages/Will/Will-chat';
import Ben from './pages/BenChat';
import Images from './pages/Images';
import Home from './pages/Home';

import Navbar from './components/Navbar';

import WillApi from './pages/Will/WillApi';

function App() {  


  return (
    <div className="App">
    <header className="App-header">
    <Router>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/images" element={<Images />} />
          <Route path="/will" element={<Will />} />
          <Route path="/ben" element={<Ben />} />
          <Route path="/willapi" element={<WillApi />} />
          <Route path="/BenAPI" element={<BenAPI />} />
        </Routes>
        
    </Router>
        
  
    </header>
      </div>
  );
}
export default App;