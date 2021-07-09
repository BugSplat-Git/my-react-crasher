import { BugSplat } from 'bugsplat';
import React from 'react';
import logo from './logo.svg';
import './App.css';
const packageJson = require('../package.json');

function App() {
  const bugsplat = new BugSplat(packageJson.database, packageJson.name, packageJson.version);
  bugsplat.setDefaultAppKey('key!');
  bugsplat.setDefaultDescription('description!');
  bugsplat.setDefaultEmail('fred@bugsplat.com');
  bugsplat.setDefaultUser('Fred');

  function handleClick(e) {
    e.preventDefault();
    throw new Error('BugSplat rocks!');
  }

  async function handleClickAsync(e) {
    e.preventDefault();
    throw new Error('BugSplat rocks!');
  }

  async function catchError(e) {
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
