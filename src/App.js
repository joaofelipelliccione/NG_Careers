import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Careers from './pages/Careers';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Careers /> } />
    </Routes>
  );
}

export default App;
