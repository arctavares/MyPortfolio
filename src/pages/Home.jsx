import React from 'react';
import Header from '../components/Header';
import '../css/Home.css';

function Home() {
  return (
    <>
      <Header />
      <div className="homeContainer">
          <div className="introContainer">
            <p className="introduction">Hi, my name is</p>
            <p className="myName">Armando Tavares.</p>
            <p className="introductionText">I'am a fullstack developer junior currently studying on <span className="trybe">Trybe</span></p>
          </div>
      </div>
    </>
  );
}

export default Home;
