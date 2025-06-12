import React, { useState,useEffect } from 'react';
import '../cssFiles/BenAPI.css'

function BenAPI(){

  const [hex, setHex] = useState('');
  const [colorName, setColorName] = useState('');
  const [colors, setColors] = useState([]);

  useEffect(() => { fetchColor();}, []);
  const fetchColor = async() => {
      const res = await fetch('https://api.sampleapis.com/csscolornames/colors')
      const data = await res.json();
      setColors(data);
  };

  const handlePost = async () => {
  const res = await fetch('https://api.sampleapis.com/csscolornames/colors', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: colorName, hex: hex })
  });
  if (res.ok){
    setHex('');
    setColorName('');
    fetchColor();
  }

};

  return (
    <div className="main">
      <h1 className="header">CSS Colors</h1>

       <div>
      <input
        type="text"
        value={colorName}
        onChange={(e) => setColorName(e.target.value)}
        placeholder='Black'
      />
      <input
        type="text"
        value={hex}
        onChange={(e) => setHex(e.target.value)}
        placeholder='#000000'
      />
      <button onClick={handlePost}>Add</button>
    </div>


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