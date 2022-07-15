import React from 'react';
import { useMediaQuery } from 'react-responsive';
import '../styles/footer.css';

function Footer() {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <footer
      className={ isMobileDevice ? 'careersPageFooterMob' : 'careersPageFooter' }
    >
      <h2>O novo é constante, construa conosco</h2>
      <h3>© NG.CASH SERVIÇOS FINANCEIROS LTDA. | CNPJ 40.940.251/0001-70</h3>
    </footer>
  );
}

export default Footer;
