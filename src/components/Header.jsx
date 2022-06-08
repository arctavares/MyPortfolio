import React from 'react';
import '../css/Header.css';

export default function Header () {
    return (
        <div className="headerContainer">
            <div className="logoContainer"><h1>Logo</h1></div>
            <div className="navContainer">
                <ul>
                    <li><span className="index">1 -</span> About</li>
                    <li><span className="index">2 -</span> Experience</li>
                    <li><span className="index">3 -</span> Work</li>
                    <li><span className="index">4 -</span> Contact</li>
                </ul>
            </div>
        </div>
    )
}

