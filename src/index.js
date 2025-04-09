import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sign from './sign-up/Sign';
import Login from './Login/Login';
import Game from './Game/Game';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        <Route path="/" element={<Game></Game>}>
        </Route>

        <Route path="/signup" element={<Sign></Sign>}>
        </Route>

        <Route path="/login" element={<Login></Login>}>
        </Route>
      </Routes>
    </Router>
);
reportWebVitals();
