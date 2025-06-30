import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Home from "./pages/Home";

import Will from "./pages/Will/WillChat";
import Ben from "./pages/Ben/BenChat";

import BenImages from "./pages/Ben/BenImages";
import WillImages from "./pages/Will/WillImages";

import BenAPI from "./pages/Ben/BenAPI";
import WillApi from "./pages/Will/WillApi";

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
            <Route path="/will/api" element={<WillApi />} />
            <Route path="/ben/api" element={<BenAPI />} />
            <Route path="/will/images" element={<WillImages />} />
            <Route path="/ben/images" element={<BenImages />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}
export default App;
