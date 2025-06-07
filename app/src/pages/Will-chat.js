import React, { useState, useEffect } from 'react';
import '../App.css';
import '../cssFiles/Will-chat.css';

function Will() {
    
  
    const [basketballInput, setBasketballInput] = useState('');
    const [messages, setMessages] = useState([]);
  
    
    
    const handleSend = () => {
    if (basketballInput.trim() !== '') {
      setMessages([...messages, basketballInput.trim()]);
      setBasketballInput('');
    }
     };

    return (
        <>
        <div className="page-content">
           
            
            <div className="row-full">
                    <div className="outerBox">
                    
                    <div className="innerBox">
                    
                        <h2 className = "leChat-prompt">
                        Who is the greatest basketball player?
                        </h2>
                        <div className="input-group">
                            <input
                                id="greatestPlayerInput"
                                type="text"
                                value={basketballInput}
                                onChange={(e) => setBasketballInput(e.target.value)}
                                placeholder="Type a name..."
                                className="le-input"
                                onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSend();
                                }
                                }}
                            />
                            <button
                                onClick={handleSend}
                                className="send-button"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                    </div>
                    {messages.map((msg, index) => (
                        <div key={index} className="chat-message">
                        {msg}
                        </div>
                    ))}
                </div>
                
            </div>
        
        </>
          
  );
}

export default Will;