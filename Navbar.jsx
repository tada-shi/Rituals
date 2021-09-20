import React from 'react';
import { BsBag } from 'react-icons/bs';
import './Navbar.css'

function Navbar() {
    return (
        <>
        <div className="style"></div>
        <nav className="navbar">
            <p className="toggle">Menu</p>
            <h1 className="header">Rituals</h1>
            <p className="about">who we are</p>
            <h1 className="cart"><BsBag /></h1>
        </nav>
        </>
    )
}

export default Navbar
