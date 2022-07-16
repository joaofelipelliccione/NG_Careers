import React from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';
import '../../styles/desktopStatement.css';

function DesktopStatement({ bkgrndColor, pictureSide,
  personPicture, personStatementPicture }) {
  return (
    <section
      className="desktopStatementSection"
      style={ { backgroundColor: bkgrndColor } }
    >
      {pictureSide === 'left' ? (
        <div>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <img
              src={ personPicture }
              alt="Entrevistado"
              className="personPicDesktopLeft"
            />
            <img
              src={ personStatementPicture }
              alt="Declaração"
              className="statementDesktopRight"
            />
          </AnimationOnScroll>
        </div>
      ) : (
        <div>
          <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <img
              src={ personStatementPicture }
              alt="Declaração"
              className="statementDesktopLeft"
            />
            <img
              src={ personPicture }
              alt="Entrevistado"
              className="personPicDesktopRight"
            />
          </AnimationOnScroll>
        </div>
      )}
    </section>
  );
}

DesktopStatement.propTypes = {
  bkgrndColor: PropTypes.string.isRequired,
  pictureSide: PropTypes.string.isRequired,
  personPicture: PropTypes.string.isRequired,
  personStatementPicture: PropTypes.string.isRequired,
};

export default DesktopStatement;
