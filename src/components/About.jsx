import React from 'react';
import '../css/About.css';

export default function About() {
  return (
    <div className='aboutContainer'>
      <h1 className='subTitle'>About Me</h1>
      <p className='aboutText'>
        I love development of software, the most enthusiastic thing to me is to bring ideas to life,
        my knowledge in programming is mainly JS, React, Node.js, Mysql, Docker and currently learning more,
        my passion is to learn something new every day.
      </p>
      <p className='aboutTextBottom'>Powered by VS Code and caffeine.</p>
    </div>
  );
}
