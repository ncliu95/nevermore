import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          my name is L and i am the coolest!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1> React vs. Javascript vs. Typescript</h1>
        <ul>
          <li>
            Typescript is typed Javascript.
          </li>
        </ul>
    </div>
  );
}

export default App;
