import './App.css';
import {useState} from "react";

function App() {
  const [animal, setAnimal] = useState("cats");
  return (
    <div className="App">
      <header className="App-header">

        <img src={"/assets/goat.jpeg"} className="App-bron" alt="Lebron James" />
        <p>
          Lebron James is very&nbsp;
          <as
          classname="yellow"
          style={{ color: '#ffff00' }}>
            fast
          </as>.
        </p>
        <a
          className="App-link-will"
          href="https://www.espn.com/nba/player/_/id/1966/lebron-james"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#ffffff' }}
        >
          More about LeBron James
        </a>
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
        <input Add commentMore actions
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