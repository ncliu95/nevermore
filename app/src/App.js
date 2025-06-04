
import './App.css';
import {useState} from "react";

function App() {
  const [animal, setAnimal] = useState("cats");
  return (
    <div className="App">
      <header className="App-header">
        <img src={'./assets/cat.jpeg'} className="cat-img" alt="logo" />
        <h1 className="text">
          We love {animal}!
        </h1>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Tabby_cat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click for more cats!
        </a>
        <input 
        id="input"
        type="text" 
        value={animal} 
        onChange={(e) => setAnimal(e.target.value)}
        placeholder="Type your favorite animal!">
        </input>
      </header>
    </div>
  );
}

export default App;
