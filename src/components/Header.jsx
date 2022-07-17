import React from 'react';
import ngLogo from '../assets/logo_ng_cash.gif';
import linkedinLogo from '../assets/logo_linkedin.svg';
import '../styles/header.css';

function Header() {
  return (
    <header className="careersPageHeader">
      <a href="https://ng.cash/" target="_blank" rel="noreferrer">
        <img
          className="ngLogo"
          src={ ngLogo }
          alt="Logo NG.CASH"
        />
      </a>
      <a href="https://www.linkedin.com/company/ngcash/" target="_blank" rel="noreferrer">
        <img
          className="linkedinLogo"
          src={ linkedinLogo }
          alt="Logo Linkedin"
        />
      </a>
    </header>
  );
}

export default Header;
