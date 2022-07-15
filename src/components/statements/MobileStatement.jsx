import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/mobileStatement.css';

function MobileStatement({ bkgrndColor, personPicture, personStatementPicture }) {
  return (
    <section
      className="mobileStatementSection"
      style={ { backgroundColor: bkgrndColor } }
    >
      <div>
        <img src={ personPicture } alt="Entrevistado" className="personPicMob" />
        <img src={ personStatementPicture } alt="Declaração" className="statementMob" />
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
