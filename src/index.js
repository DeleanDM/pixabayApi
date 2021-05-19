import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom'
import PicPassport from './components/PicPassport'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <Route path = '/pixabayApi' exact component = {App}/>
       <Route path = '/pixabayApi/img/:id' component = {PicPassport}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
