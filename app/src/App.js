import {useState,useEffect} from 'react';
import './App.css';



function App() {

  const [inputValue, setInputValue ] = useState('');
  const [displayText, setDisplayText] = useState('most people');

  useEffect(() => {
    if (inputValue.trim()!==''){
      setDisplayText(inputValue);
    }
    if(inputValue.trim()===''){
      setDisplayText('most people');
    }
  }, [inputValue]);
  

  const [animal, setAnimal] = useState("cats");

  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const submit_function = (e) => {
    if (note.trim() === '') return;
    setNotes([...notes, note]);  
    setNote(''); 
  };
  
  
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
          className="input"
          type="text" 
          value={animal} 
          onChange={(e) => setAnimal(e.target.value)}
          placeholder="Type your favorite animal!">
          </input>
          </div>          
          
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
        </div>

      </header>
    </div>
  );
}



export default App;