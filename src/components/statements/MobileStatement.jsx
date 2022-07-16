import React from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';
import '../../styles/mobileStatement.css';

function MobileStatement({ bkgrndColor, personPicture, personStatementPicture }) {
  return (
    <section
      className="mobileStatementSection"
      style={ { backgroundColor: bkgrndColor } }
    >
      <div>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <img src={ personPicture } alt="Entrevistado" className="personPicMob" />
          <img src={ personStatementPicture } alt="Declaração" className="statementMob" />
        </AnimationOnScroll>
      </div>
    </section>
  );
}

MobileStatement.propTypes = {
  bkgrndColor: PropTypes.string.isRequired,
  personPicture: PropTypes.string.isRequired,
  personStatementPicture: PropTypes.string.isRequired,
};

export default MobileStatement;
