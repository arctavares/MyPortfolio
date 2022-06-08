import React from 'react';
import '../css/Header.css';

export default function Header () {
    return (
        <div className="headerContainer">
            <div className="logoContainer"><h1>Logo</h1></div>
            <div className="navContainer">
                <ul>
                    <li>1 - About</li>
                    <li>2 - Experience</li>
                    <li>3 - Work</li>
                    <li>4 - Contact</li>
                </ul>
            </div>
        </div>
    )
}

