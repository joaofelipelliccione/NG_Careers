import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Careers from './pages/Careers';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Careers /> } />
    </Routes>
  );
}

export default App;
