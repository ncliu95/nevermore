import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"/assets/goat.jpeg"} className="App-bron" alt="Lebron James" />
        <p>
          Lebron James is very&nbsp;
          <as
          classname="yellow"
          style={{ color: '#ffff00' }}>
            fast
          </as>.
        </p>
        <a
          className="Source"
          href="https://www.espn.com/nba/player/_/id/1966/lebron-james"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#ffffff' }}
        >
          More about LeBron James
        </a>
      </header>
    </div>
  );
}

export default App;
