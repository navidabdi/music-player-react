import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateMusics } from './contexts/StateMusics';
ReactDOM.render(
  <StateMusics>
    <App />
  </StateMusics>,
  document.getElementById('root')
);
