import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure to create this CSS file

function Header() {
    return (
        <header className="header">
            <nav className="nav-container">
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                    <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;