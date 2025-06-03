import cat from './cat.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cat} className="App-logo" alt="logo" />
        <h1 className="text">
          We love cats!
        </h1>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Tabby_cat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click for more cats!
        </a>
      </header>
    </div>
  );
}

export default App;
