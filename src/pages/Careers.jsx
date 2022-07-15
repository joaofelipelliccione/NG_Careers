import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header';
import Cover from '../components/Cover';
import JoinNgBtn from '../components/JoinNgBtn';
import NewsSection from '../components/NewsSection';
import SecondCover from '../components/SecondCover';
import MobileStatement from '../components/statements/MobileStatement';
import DesktopStatement from '../components/statements/DesktopStatement';
import statementsInfoMob, { statementsInfoDesktop } from '../data/statementsInfo';
import Footer from '../components/Footer';
import '../styles/careers.css';

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
        statementsInfoMob.map(({ name, bgColor, personPic, personStatPic }) => (
          <MobileStatement
            key={ name }
            bkgrndColor={ bgColor }
            personPicture={ personPic }
            personStatementPicture={ personStatPic }
          />
        )))
        : (
          statementsInfoDesktop.map(({
            name, bgColor, picSide, personPic, personStatPic,
          }) => (
            <DesktopStatement
              key={ name }
              bkgrndColor={ bgColor }
              pictureSide={ picSide }
              personPicture={ personPic }
              personStatementPicture={ personStatPic }
            />
          )))}
      <Footer />
    </div>
  );
}

export default Careers;
