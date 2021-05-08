import React from 'react';
import './Header.css'
import logo from '../../images/logo.jpg'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            {/* <h1>This is header</h1> */}
            <nav >
                <a href="/dashboard">Dashboard</a>
                <a href="/review">Review</a>
                <a href="/manage">Manage</a>
            </nav>
        </div>
    );
};

export default Header;