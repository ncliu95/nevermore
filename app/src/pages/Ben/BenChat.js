import React, { useState, useRef, useEffect } from "react";
import "../../cssFiles/BenChat.css";

function Ben() {
  const [note, setNote] = useState("");
  const [messages, setMessages] = useState([]);
  const dummy = useRef();  
  
  useEffect(() => {
      dummy.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [messages]);

  const submit_function = async () => {
    if (note.trim() === "") return;

    const newMessages = [...messages, { role: "user", content: note }];
    setMessages(newMessages);
    setNote("");

    try {
      const res = await fetch("http://localhost:8000/ben/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages.map((msg) => msg.content), 
        }),
      });

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      const aiReply = data.response[data.response.length - 1];

      setMessages((prev) => [...prev, { role: "assistant", content: aiReply }]);
    } catch (err) {
      console.error("Error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error getting response." },
      ]);
    }

   
  }; 
  


  return (
    <div className="parent">
      <div ref={dummy} className="dummy" />
      <div className="chat-area">
        {messages.length === 0 ? (
          <p className="chat-text">Talk to Ben!</p>
        ) : (
            [...messages].reverse().map((msg, index) => (
              <div key={index} className={`textbox ${msg.role === "assistant" ? "bot" : "user"}`}>
                {msg.content}
              </div>
            ))
        )}
        
      </div>

      <div className="input-div">
        <input
          className="chat-input"
          type="text"
          placeholder="Type your message.."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submit_function();
            }
          }}
        />
        <div onClick={submit_function} className="chat-button">
          <img src="assets/arrow.png" className="arrow" alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Ben;