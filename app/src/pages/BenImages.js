import React, { useState,useEffect } from 'react';
import '../cssFiles/Images.css';

function BenImages() {
  const [animal, setAnimal] = useState("cats");

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
    </div></div>
  );
}

export default BenImages;