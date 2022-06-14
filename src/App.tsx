import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Provider from '../src/context/Provider';

function App() {
  return (
    <div className='App'>
      <Provider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
