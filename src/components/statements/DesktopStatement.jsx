import React from 'react';
import PropTypes from 'prop-types';
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
        </div>
      ) : (
        <div>
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
