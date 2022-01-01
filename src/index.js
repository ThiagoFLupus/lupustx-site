import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from '../src/store/store';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store()}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
