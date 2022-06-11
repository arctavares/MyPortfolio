import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import '../css/Home.css';

function Home() {
  const openParenthesis = <span >{`{`}</span>;
  const closeParenthesis = <span className="closeParenthesis">{`}`}</span>;
  return (
    <div className='body'>
      <Header />
      <div className="homeContainer">
          <div className="introContainer">
            <p className="introduction">{openParenthesis} Hi, my name is :</p>
            <p className="myName">"Armando Tavares" {closeParenthesis}</p>
            <p className="introductionText">I'am a fullstack developer junior currently studying on <span className="trybe">Trybe</span></p>
          </div>
      </div>
      <About />
      <Projects />
    </div>
  );
}

export default Home;
