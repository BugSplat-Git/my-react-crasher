import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BugSplat from 'bugsplat';

const bugsplat = new BugSplat('Fred', 'my-react-crasher', '1.0.0');

window.onunhandledrejection = async (rejection) => {
  await bugsplat.post(rejection.reason)
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
