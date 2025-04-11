import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sign from './sign-up/Sign';
import Login from './Login/Login';
import Game from './Game/Game';
import History from './Game/History';
import Privateroute from './Util/Privateroute';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        <Route path="/" element={<Privateroute><Game></Game></Privateroute>}>
        </Route>

        <Route path="/signup" element={<Sign></Sign>}>
        </Route>

        <Route path="/login" element={<Login></Login>}>
        </Route>

        <Route path="/history" element={<Privateroute><History></History></Privateroute>}>
        </Route>
      </Routes>
    </Router>
);
reportWebVitals();
