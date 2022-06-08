import React from 'react';
import { Route, HashRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

class App extends React.Component {
  render(){
    return (
      <div className="App">
          <Routes>
            <Route element={  <Home />  } path='/' />
          </Routes>
      </div>
    );
}
}

export default App;
