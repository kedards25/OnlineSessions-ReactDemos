import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  //reference of App.js referred to as App
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* ReactJs allows us to use javascript files as components which can 
    be rendered as tag */}
    <App />
  </React.StrictMode>,
  document.getElementById('root') //tag <App> is being loaded in the element 
                                  //with an id root in index.html
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
