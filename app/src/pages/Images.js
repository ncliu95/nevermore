import React, { useState,useEffect } from 'react';
import '../cssFiles/Images.css';

function Images() {
  const [animal, setAnimal] = useState("cats");

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
    <div className="page-content">
     <div className="container">
          
        <div className="row">
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
          className="input"
          type="text" 
          value={animal} 
          onChange={(e) => setAnimal(e.target.value)}
          placeholder="Type your favorite animal!">
          </input>
        </div>
        <div className="row">
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
          className="App-link"
          href="https://www.espn.com/nba/player/_/id/1966/lebron-james"
          target="_blank"
          rel="noopener noreferrer"
          >
          More about LeBron James
          </a>
        </div>
      </div>
    </div>
  );
}

export default Images;