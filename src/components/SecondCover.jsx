import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';
import secondCoverMobile from '../assets/second_cover_mobile.svg';
import secondCoverDesktop from '../assets/second_cover_desktop.svg';
import '../styles/secondCover.css';

function SecondCover() {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <section className="secondCoverSection">
      <div>
        {isMobileDevice ? (
          <img
            src={ secondCoverMobile }
            alt="Mosaico Klovis"
            className="mobileSecondCover"
          />
        ) : (
          <AnimationOnScroll
            animateIn="animate__wobble"
          >
            <img
              src={ secondCoverDesktop }
              alt="Mosaico Klovis"
              className="desktopSecondCover"
            />
          </AnimationOnScroll>
        )}
      </div>
    </section>
  );
}

export default SecondCover;
