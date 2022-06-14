import React, { useContext } from 'react';
import '../css/NavButton.css';
import context from '../context/context';

export default function NavButton() {
  const { Nav, setNav } = useContext(context);

  const navStatus = () => {
    return Nav === 'hide' ? 'display' : 'hide';
  };

  return (
    <div className='hamburgerIcon' onClick={() => setNav(navStatus())}>
      <div className='firstLine' id='line'></div>
      <div className='secondLine' id='line'></div>
      <div className='thirdLine' id='line'></div>
    </div>
  );
}
