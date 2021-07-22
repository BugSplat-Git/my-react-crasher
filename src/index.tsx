import App from './App';
import { BugSplat } from 'bugsplat';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const packageJson = require('../package.json');

const bugsplat = new BugSplat(packageJson.database, packageJson.name, packageJson.version);
bugsplat.setDefaultAppKey('key!');
bugsplat.setDefaultDescription('description!');
bugsplat.setDefaultEmail('fred@bugsplat.com');
bugsplat.setDefaultUser('Fred');

window.onunhandledrejection = async (rejection:any) => {
  await bugsplat.post(rejection.reason);
}

window.onerror = async (event, source, lineno, colno, error) => {
  await bugsplat.post(error as Error);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
