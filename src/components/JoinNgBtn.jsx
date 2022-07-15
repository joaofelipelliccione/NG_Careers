import React from 'react';
import { useMediaQuery } from 'react-responsive';
import '../styles/joinNgBtn.css';

function JoinNgBtn() {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <a
      className={ isMobileDevice ? 'joinNgBtnMobile' : 'joinNgBtnDesktop' }
      href="https://boards.greenhouse.io/ngcash?t=f684d1ae5us"
      target="_blank"
      rel="noreferrer"
    >
      quero fazer parte do time!
    </a>
  );
}

export default JoinNgBtn;
