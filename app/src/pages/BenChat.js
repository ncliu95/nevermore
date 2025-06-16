import React, { useState, useRef} from 'react';
import '../cssFiles/BenChat.css'

function Ben() {

  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const dummy = useRef();
  const submit_function = (e) => {
    if (note.trim() === '') return;
    setNotes([...notes, note]);  
    setNote(''); 

    dummy.current.scrollIntoView({behavior: 'instant', block: "end"})
  };


  
  
  return (          
    <div className="parent">
      <div className="chat-area">
          {notes.length === 0 ? (
            <p className="chat-text">Ask Anything.</p>
          ) : (
            notes.map((n, index) => (
              <div key={index} className="textbox">
                {n}
              </div>
            ))
          )}
      </div>
      <div ref={dummy} className="dummy">
      </div>
        
      <div className="input-div">
        <input
          className="chat-input"
          type="text"
          placeholder="Type your message.."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onKeyDown={(e) => {
          if (e.key === 'Enter') {
              submit_function();
          }
          }}
        />
        <div onClick={submit_function} className="chat-button">
          <img src='assets/arrow.png' className="arrow"></img>
        </div>
      </div>
    </div>
  );
}

export default Ben;