import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
