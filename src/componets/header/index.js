import React from 'react';
import logoImage from '../../assets/images/logo.jpg';
import '../../css/header.css';

function Header() {
  return (
    <header className="header">
        <div className="wrapper">
            <nav className="nav">
                <img src={logoImage} alt="Logo" className="logo" />
                <ul className="nav-links">
                <li><a href="/">Início</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contato">Contato</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
}

export default Header;
