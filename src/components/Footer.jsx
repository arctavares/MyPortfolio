import React from 'react';
import '../css/Footer.css';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';

export default function Footer() {
  return (
    <>
      <div className='footerContainer'>
        <a
          href='https://www.linkedin.com/in/armando-tavares/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={linkedin} alt='linkedin logo' />
        </a>
        <a
          href='https://github.com/arctavares'
          target='_blank'
          rel='noreferrer'
        >
          <img src={github} alt='github logo' />
        </a>
      </div>
      <a className="myEmail" href="mailto:flavio_ribeirorc@hotmail.com">arctavares@outlook.com</a>
    </>
  );
}
