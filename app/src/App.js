import {useState,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Will from './pages/Will-chat';
import Ben from './pages/Ben-chat';
import Images from './pages/Images';

import Navbar from './components/Navbar';

import WillApi from './components/WillApi';

function App() {  


  return (
    <div className="App">
    <header className="App-header">
    <Router>
      <Navbar />
        <Routes>
          <Route path="/images" element={<Images />} />
          <Route path="/will" element={<Will />} />
          <Route path="/ben" element={<Ben />} />
          <Route path="/willapi" element={<WillApi />} />
        </Routes>
        
    </Router>
        
  
    </header>
      </div>
  );
}
export default App;