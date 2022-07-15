import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header';
import Cover from '../components/Cover';
import JoinNgBtn from '../components/JoinNgBtn';
import NewsSection from '../components/NewsSection';
import SecondCover from '../components/SecondCover';
import MobileStatement from '../components/statements/MobileStatement';
import trindadePicMob from '../assets/statements/mobile/trindade_pic_mob.png';
import trindadeTextMob from '../assets/statements/mobile/trindade_text_mob.png';
import trindadePicDesktop from '../assets/statements/desktop/trindade_pic_desk.png';
import trindadeTextDesktop from '../assets/statements/desktop/trindade_text_desk.png';
import '../styles/careers.css';
import DesktopStatement from '../components/statements/DesktopStatement';

function Careers() {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className="careersPage">
      <Header />
      <Cover />
      <JoinNgBtn />
      <NewsSection />
      <SecondCover />
      {isMobileDevice ? (
        <MobileStatement
          bkgrndColor="#7D2CFF"
          personPicture={ trindadePicMob }
          personStatementPicture={ trindadeTextMob }
        />)
        : (
          <DesktopStatement
            bkgrndColor="#7D2CFF"
            pictureSide="left"
            personPicture={ trindadePicDesktop }
            personStatementPicture={ trindadeTextDesktop }
          />
        )}
    </div>
  );
}

export default Careers;
