import React, { useContext } from 'react';
import '../css/SideNav.css';
import context from '../context/context';

export default function SideNav() {
  const { Nav } = useContext(context);

  return (
    <div className={`sidenav ${Nav}`}>
      <a href='#t'>About</a>
      <a href='#t'>Projects</a>
      <a href='#t'>Experience</a>
      <a href='#t'>Contact</a>
    </div>
  );
}
