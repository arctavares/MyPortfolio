import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={  <Home />  } path='/' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
