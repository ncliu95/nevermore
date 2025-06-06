import React, { useState } from 'react';
import '../App.css';

function Ben() {

  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const submit_function = (e) => {
    e.preventDefault();
    if (note.trim() === '') return;
    setNotes([...notes, note]);  
    setNote(''); 
  };
  
  
  return (          
          <div className="notes">
          <div>
              {notes.length === 0 ? (
                <p>No notes yet.</p>
              ) : (
                notes.map((n, index) => (
                  <div key={index}>
                    {n}
                  </div>
                ))
              )}
            </div>
              <textarea className="input"
                rows="4"
                placeholder="Write your note here..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
              <button className="button"
                type="submit"
                onClick={submit_function}
              >
                Submit
              </button>


            
    </div>
  );
}

export default Ben;