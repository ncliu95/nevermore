import React, { useState,useEffect } from 'react';

import '../cssFiles/Images.css';

function Images() {
  const [animal, setAnimal] = useState("cats");

const [inputValue, setInputValue ] = useState('');
const [displayText, setDisplayText] = useState('most people');

const [type, settype] = useState('');
const [setup, setSetup] = useState('');
const [punchline, setPunchline] = useState('');
const [jokes, setJokes] = useState([]);

const fetchJokes = async () => {
const res = await fetch('https://api.sampleapis.com/jokes/goodJokes');
const data = await res.json();
const sortedData = data.slice(-3);
setJokes(sortedData);
};
const handlePost = async () => {
const res = await fetch('https://api.sampleapis.com/jokes/goodJokes', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ type, setup, punchline })
});

if (res.ok) {
settype('');
setSetup('');
setPunchline('');
fetchJokes(); 
}
};


useEffect(() => {
if (inputValue.trim()!==''){
setDisplayText(inputValue);
}
if(inputValue.trim()===''){
setDisplayText('most people');
}
}, [inputValue]);

useEffect(() => {
fetchJokes();
}, []);
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
      <div className='jokeBoxBox'>
        <h2 className="jokeText">Submit a Joke</h2>
        <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => settype(e.target.value)}
        />

        <input
        type="text"
        placeholder="Setup"
        value={setup}
        onChange={(e) => setSetup(e.target.value)}
        />

        <input
        type="text"
        placeholder="Punchline"
        value={punchline}
        onChange={(e) => setPunchline(e.target.value)}
        />

        <button onClick={handlePost}>Submit Joke</button>

        <h3 className='jokeText'>Submitted Jokes</h3>
      
        {jokes.map((joke, index) => (
        <div key={index} className='joke-item'>
          <div className='jokeBox'>
          <p className='jokeText'>Setup: {joke.setup}</p> 
          <p className='jokeText'>Punchline: {joke.punchline}</p> 
          </div>
        </div>
        ))}
      </div>
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