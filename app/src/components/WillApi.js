import React, { useState, useEffect } from 'react';
import Will from '../pages/Will-chat';
import '../cssFiles/WillApi.css'

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
                <h2 className='foodName'>{item.title}</h2>
                <p className='foodCourse'>Course: {item.course||'Course not specified'}</p>
                {item.photoUrl &&(
                <img src={item.photoUrl} alt={null} style={{ width: '200px' }} />
                )}
                <a href = {item.source} target="_blank" rel="noopener noreferrer">
                <button type="button" >Click me for the Source!</button>
                </a>
            </li>
            ))}
        </ul>
    </div>
  );
}

export default WillApi;