import React from 'react';
import { useMediaQuery } from 'react-responsive';
import arrowToLeft from '../assets/arrow_to_left.svg';
import arrowToRight from '../assets/arrow_to_right.svg';
import '../styles/joinNgBtn.css';

function JoinNgBtn() {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    isMobileDevice ? (
      <a
        className="joinNgBtnMobile"
        href="https://boards.greenhouse.io/ngcash?t=f684d1ae5us"
        target="_blank"
        rel="noreferrer"
      >
        quero fazer parte do time!
      </a>
    ) : (
      <a
        className="joinNgBtnDesktop"
        href="https://boards.greenhouse.io/ngcash?t=f684d1ae5us"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="arrows"
          src={ arrowToRight }
          alt="Seta p/ Direita"
        />
        <span>
          quero fazer parte do time!
        </span>
        <img
          className="arrows"
          src={ arrowToLeft }
          alt="Seta p/ Esquerda"
        />
      </a>
    )
  );
}

export default JoinNgBtn;
