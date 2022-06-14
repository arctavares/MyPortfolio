import React from 'react';
import '../css/Footer.css';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';

export default function Footer() {
  return (
    <div className='footerContainer'>
      <img src={linkedin} alt='linkedin logo' />
      <img src={github} alt='github logo' />
    </div>
  );
}
