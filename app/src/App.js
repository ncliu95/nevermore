import {useState,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Will from './pages/Will';
import Ben from './pages/Ben';

import Navbar from './components/Navbar';

function App() {  
  return (
    <div className="App">
    <header className="App-header">
    <Router>
      <Navbar />
        
        <Routes>
          <Route path="/will" element={<Will />} />
          <Route path="/ben" element={<Ben />} />
        </Routes>
        
    </Router>
        
  
    </header>
      </div>
  );
}
export default App;