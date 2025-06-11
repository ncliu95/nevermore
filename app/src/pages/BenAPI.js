import React, { useState,useEffect } from 'react';
import '../cssFiles/BenAPI.css'

function BenAPI(){

  const [colors, setColors] = useState([]);

  useEffect(() => {
      fetch('https://api.sampleapis.com/csscolornames/colors')
      .then(response => response.json())
      .then(data => setColors(data))
      .catch(error => console.error('Error fetching colors:', error));
  }, []);

  return (
    <div className="main">
      <h1 className="header">CSS Colors</h1>
        <div className="container">
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color.hex,
            color: '#fff',
            padding: '5px',
            borderRadius: '8px',
            width: '80px',
            textAlign: 'center',
            fontSize: '10px'
          }}
        >
          {color.name}
        </div>
      ))}
        </div>
        </div>
  );
}

export default BenAPI;