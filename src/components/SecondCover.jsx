import React from 'react';
import { useMediaQuery } from 'react-responsive';
import secondCoverMobile from '../assets/second_cover_mobile.png';
import secondCoverDesktop from '../assets/second_cover_desktop.png';
import '../styles/secondCover.css';

function SecondCover() {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <section className="secondCoverSection">
      {isMobileDevice ? (
        <img
          src={ secondCoverMobile }
          alt="Mosaico Klovis"
          className="mobileSecondCover"
        />
      ) : (
        <img
          src={ secondCoverDesktop }
          alt="Mosaico Klovis"
          className="desktopSecondCover"
        />
      )}
    </section>
  );
}

export default SecondCover;
