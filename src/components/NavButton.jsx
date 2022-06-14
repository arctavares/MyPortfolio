import React from 'react';
import '../css/NavButton.css';

export default function NavButton() {
  return (
    <div className='hamburgerIcon'>
      <div className='firstLine' id="line"></div>
      <div className='secondLine' id="line"></div>
      <div className='thirdLine' id="line"></div>
    </div>
  );
}
