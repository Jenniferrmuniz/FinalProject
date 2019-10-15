import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App.jsx'
// import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'
axios.withCredentials = true;

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
// registerServiceWorker();
