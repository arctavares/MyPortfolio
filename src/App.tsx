import React from 'react';
import { Route, HashRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route element={  <Home />  } path='/' />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
