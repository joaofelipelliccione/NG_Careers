import React from 'react';
import coverMobile from '../assets/cover_mobile.png';
import '../styles/cover.css';

function Cover() {
  return (
    <section className="coverSection">
      <img src={ coverMobile } alt="Logo NG.CASH" />
    </section>
  );
}

export default Cover;
