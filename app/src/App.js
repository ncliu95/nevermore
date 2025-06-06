import {useState,useEffect} from 'react';
import './App.css';



function App() {

  const [inputValue, setInputValue ] = useState('');
  const [displayText, setDisplayText] = useState('most people');

  const [basketballInput, setBasketballInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (inputValue.trim()!==''){
      setDisplayText(inputValue);
    }
    if(inputValue.trim()===''){
      setDisplayText('most people');
    }
    
  }, [inputValue]);
  
  const handleSend = () => {
    if (basketballInput.trim() !== '') {
      setMessages([...messages, basketballInput.trim()]);
      setBasketballInput('');
    }
  };

  const [animal, setAnimal] = useState("cats");
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <img src={"/assets/goat.jpeg"} className="App-bron" alt="Lebron James" />

            <p>
              Lebron James is&nbsp;
              <span
              className="yellow"
              style={{ color: '#ffff00' }}>
                faster&nbsp;
              </span>
              <span id="Letext">than {displayText}</span> 
            </p>

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Who is the fastest person you know?"
              size ="34"
            />
            <a
              className="App-link-will"
              href="https://www.espn.com/nba/player/_/id/1966/lebron-james"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ffffff' }}
            >
              More about LeBron James
            </a>
          </div>
        <div className="row">
          <img src={'./assets/cat.jpeg'} className="cat-img" alt="logo" />
        <h1 className="text">
          We love {animal}!
        </h1>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Tabby_cat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click for more cats!

        </a>
        <input Add commentMore actions
        id="input"
        type="text" 
        value={animal} 
        onChange={(e) => setAnimal(e.target.value)}
        placeholder="Type your favorite animal!">
        </input>
        </div>
       <div className="row">
            <div className="box-wrapper">
              <div className="outerBox">
                {messages.map((msg, index) => (
                  <div key={index} className="chat-message">
                    {msg}
                  </div>
                ))}
              </div>
              <div className="innerBox">
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <label htmlFor="greatestPlayerInput" style={{ fontSize: '12px', color: '#222' }}>
                    Who is the greatest basketball player?
                  </label>
                  <div className="input-group">
                    <input
                      id="greatestPlayerInput"
                      type="text"
                      value={basketballInput}
                      onChange={(e) => setBasketballInput(e.target.value)}
                      placeholder="Type a name..."
                      className="chat-input"
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
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default App;