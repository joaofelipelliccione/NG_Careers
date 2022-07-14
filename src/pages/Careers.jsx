import React from 'react';
import Header from '../components/Header';
import Cover from '../components/Cover';
import JoinNgBtn from '../components/JoinNgBtn';
import '../styles/careers.css';

function Careers() {
  return (
    <div className="careersPage">
      <Header />
      <Cover />
      <JoinNgBtn />
    </div>
  );
}

export default Careers;
