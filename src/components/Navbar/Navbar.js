import React from 'react';
import logo from '../../logo.png';
import "./Navber.scss";

export default function Navbar() {
    return (
        <nav className="navber">
            <img src={logo} alt="city tours logo" /> 
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">
                        home
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link">
                        about
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link">
                        tours
                    </a>
                </li>
            </ul>
        </nav>
    )
}
