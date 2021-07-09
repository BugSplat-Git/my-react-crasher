import { BugSplat } from 'bugsplat';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const packageJson = require('../package.json');

const bugsplat = new BugSplat(packageJson.database, packageJson.name, packageJson.version);
bugsplat.setDefaultAppKey('key!');
bugsplat.setDefaultDescription('description!');
bugsplat.setDefaultEmail('fred@bugsplat.com');
bugsplat.setDefaultUser('Fred');

window.onunhandledrejection = async (rejection) => {
  await bugsplat.post(rejection.reason);
}

window.onerror = async (event, source, lineno, colno, error) => {
  await bugsplat.post(error);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
