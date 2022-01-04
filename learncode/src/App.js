import logo from './logo.svg';
import './App.css';
import { Button } from './stories/Button';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        
    
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Button primary size="small" label="Log out" />
        <input type="text" id="fname" name="fname" />

      </header>
    </div>
  );
}

export default App;
