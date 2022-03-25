import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className="header">
                <h3>Foodie 1350</h3>
                <div className="menu">
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/menu">Menu</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;