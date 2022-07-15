import React from 'react';
import { useMediaQuery } from 'react-responsive';
import coverMobile from '../assets/cover_mobile.png';
import coverDesktop from '../assets/cover_desktop.png';
import '../styles/cover.css';

function Cover() {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <section className="coverSection">
      {isMobileDevice ? (
        <img src={ coverMobile } alt="Mosaico NG.Card" className="mobileCover" />
      ) : (
        <img src={ coverDesktop } alt="Mosaico NG.Card" className="desktopCover" />
      )}
    </section>
  );
}

export default Cover;
