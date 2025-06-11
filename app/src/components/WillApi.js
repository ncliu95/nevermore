import React, { useState, useEffect } from 'react';
import Will from '../pages/Will-chat';

function WillApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/recipes/recipes')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error('Error:', err));
  }, []); 

  return (
    <div>
        <h1>Will's API Data</h1>
        <ul>
            {data.map((item, index) => (
            <li key={index}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <img src={item.image} alt={item.title} style={{ width: '200px' }} />
            </li>
            ))}
        </ul>
    </div>
  );
}

export default WillApi;