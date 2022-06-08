import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Route path='/' element={ <Home/> } />
    </div>
  );
}

export default App;
