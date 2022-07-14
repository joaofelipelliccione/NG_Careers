import React from 'react';
import ngLogo from '../assets/logo_ng_cash.svg';
import '../styles/header.css';

function Header() {
  return (
    <header className="careersPageHeader">
      <a href="https://ng.cash/" target="_blank" rel="noreferrer">
        <img src={ ngLogo } alt="Logo NG.CASH" />
      </a>
      <h1>
        <em>
          Carreiras
        </em>
      </h1>
    </header>
  );
}

export default Header;
