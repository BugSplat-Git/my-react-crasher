import { BugSplat } from 'bugsplat';
import { MouseEvent } from 'react';
import './App.css';
import logo from './logo.svg';

function App(props: { bugsplat: BugSplat }) {
  const { bugsplat } = props;

  function handleClick(e: MouseEvent) {
    e.preventDefault();
    throw new Error('BugSplat rocks!');
  }

  async function handleClickAsync(e: MouseEvent) {
    e.preventDefault();
    throw new Error('BugSplat rocks!');
  }

  async function catchError(e: MouseEvent) {
    e.preventDefault();
    try {
      throw new Error('BugSplat rocks!');
    } catch (error) {
      await bugsplat.post(error);
    }
  }

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
        <br/>
        <button onClick={handleClick}>
          Unhandled Exception!
        </button>
        <br/>
        <button onClick={handleClickAsync}>
          Unhandled Promise Rejection!
        </button>
        <br/>
        <button onClick={catchError}>
          Try Catch!
        </button>
      </header>
    </div>
  );
}

export default App;
