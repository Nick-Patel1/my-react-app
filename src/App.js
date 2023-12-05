import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./logo.png')} alt="" width="800" height="600"/>
        <p>
          Do Advent of Code and win cool prizes.
        </p>
        <a
          className="App-link"
          href="https://adventofcode.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Merry Christmas!
        </a>
      </header>
    </div>
  );
}

export default App;
