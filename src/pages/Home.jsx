import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';
import NavButton from '../components/NavButton';
import '../css/Home.css';

function Home() {
  const openParenthesis = <span className="openParenthesis">{`{`}</span>;
  const closeParenthesis = <span className="closeParenthesis">{`}`}</span>;
  return (
    <div className='body'>
      <NavButton />
      <Header />
      <div className="homeContainer">
          <div className="introContainer" id="introContainer">
            <p className="introduction">{openParenthesis} Hi, my name is :</p>
            <p className="myName">"Armando Tavares" {closeParenthesis}</p>
            <p className="introductionText">I'am a fullstack developer junior currently studying on <span className="trybe">Trybe</span></p>
          </div>
      </div>
      <SideNav />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default Home;
