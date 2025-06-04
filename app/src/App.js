import React, {useState,useEffect} from 'react';
import './App.css';


function App() {
  const [inputValue, setInputValue ] = useState('');
  const [displayText, setDisplayText] = useState('most people');

  useEffect(() => {
    if (inputValue.trim()!==''){
      setDisplayText(inputValue);
    }
    if(inputValue.trim()===''){
      setDisplayText('most people');
    }
  }, [inputValue]);
  
  return (
    <div className="App">
      <header className="App-header">

        <img src={"/assets/goat.jpeg"} className="App-bron" alt="Lebron James" />

        <p>
          Lebron James is&nbsp;
          <span
          className="yellow"
          style={{ color: '#ffff00' }}>
            faster&nbsp;
          </span>
          <span id="Letext">than {displayText}</span> 
        </p>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Who is the fastest person you know?"
          size ="34"
          
          
/>
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