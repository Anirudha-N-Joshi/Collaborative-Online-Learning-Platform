// src/App.js
import React from 'react';
import Login from './login';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Planner from "./Planner";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planner" element={<Planner />} />
    </Routes>
  </Router>
  );
}

export default App;
