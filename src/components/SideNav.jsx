import React, { useContext } from 'react';
import '../css/SideNav.css';
import context from '../context/context';
import { useNavigate } from 'react-router-dom';

export default function SideNav() {
  const navigate = useNavigate();
  const { Nav } = useContext(context);

  const scroll = (element) => {
    return document.getElementById(element).scrollIntoView({block: 'start', behavior: 'smooth'})
  }

  return (
    <div className={`sidenav ${Nav}`}>
      <button type="button" onClick={() => scroll('introContainer')}>About</button>
      <button type="button" onClick={() => scroll('projects')}>Projects</button>
      <button type="button" onClick={() => scroll('experience')}>Experience</button>
      <button type="button" onClick={() => navigate('/contact')}>Contact</button>
    </div>
  );
}
