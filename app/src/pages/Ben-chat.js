import React, { useState } from 'react';
import '../App.css';

function Ben() {

  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const submit_function = (e) => {
    if (note.trim() === '') return;
    setNotes([...notes, note]);  
    setNote(''); 
  };

  const key_submit = (e) =>{
    if(e.key === "Enter"){setNotes([...notes, note]);  
            setNote(''); }
            
  }
  
  
  return (          
          <div>
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
            <div className="input-div">
              <input
                className="chat-input"
                type="text"
                rows="4"
                placeholder="Type your message.."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
              <button className="chat-button"
                onClick={submit_function}
                onKeyDown={key_submit}
              >
                Submit
              </button>
            </div>
    </div>
  );
}

export default Ben;