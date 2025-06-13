import React, { useState, useEffect } from 'react';
import '../cssFiles/WillApi.css'

function WillApi() {
const [data, setData] = useState([]);

useEffect(() => {
fetch('https://api.sampleapis.com/recipes/recipes')
.then(res => res.json())
.then(json => {

const priority = {
  'Main Course': 1,
  'Side Course': 2,
  'Breakfast': 3,
  'Desserts': 4,
  'Lunch': 5,
  'Side Dishes': 6,
  'Soup': 7,
  'Course not specified': 9,
};

const sortedData = json.sort((a, b) => {
const aPriority = priority[a.course] || 8;
const bPriority = priority[b.course] || 8;

if (aPriority === bPriority) {
return (a.course || '').localeCompare(b.course || '');
}

return aPriority - bPriority;
});

setData(sortedData);
})
.catch(err => console.error('Error:', err));
}, []);

return (
<div>
  <h1>Will's API Data</h1>

  <ul>
    {data.map((item, index) => (
    <div key={index}>
      <div className= 'foodContainer'>
        <div className='foodLeft'>
          <h2 className='foodName'>{item.title}</h2>
          <p className='foodCourse'>Course: {item.course||'Course not specified'}</p>
          <p className='timeToCook'>Estimated Time to Cook: {item.totalTime} minutes</p>
        </div>

        <div className='foodRight'>
          {item.photoUrl &&(
          <img src={item.photoUrl} alt='' className='foodImage'/>
          )}
          <a href = {item.source} target="_blank" rel="noopener noreferrer">
          <button type="button" className='foodButton' >Click me for the Source!</button>
          </a>
        </div>
      </div>
    </div>
    ))}
  </ul>
</div>
);
}

export default WillApi;