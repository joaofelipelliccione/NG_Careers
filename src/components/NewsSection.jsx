import React from 'react';
import logoGlobo from '../assets/logo_globo.svg';
import logoForbes from '../assets/logo_forbes.svg';
import logoEstadao from '../assets/logo_estadao.svg';
import logoFolhaSP from '../assets/logo_folhaSP.svg';
import logoIstoE from '../assets/logo_istoE.svg';
import logoUol from '../assets/logo_uol.svg';
import '../styles/newsSection.css';

const newsIcons = [
  { iconId: 1, iconImgSrc: logoGlobo, iconHref: 'https://oglobo.globo.com/' },
  { iconId: 2, iconImgSrc: logoForbes, iconHref: 'https://forbes.com.br/' },
  { iconId: 3, iconImgSrc: logoEstadao, iconHref: 'https://www.estadao.com.br/' },
  { iconId: 4, iconImgSrc: logoFolhaSP, iconHref: 'https://www.folha.uol.com.br/' },
  { iconId: 5, iconImgSrc: logoIstoE, iconHref: 'https://istoe.com.br/' },
  { iconId: 6, iconImgSrc: logoUol, iconHref: 'https://www.uol.com.br/' },
];

function NewsSection() {
  return (
    <section className="newsSection">
      <div className="newsSectionWrapper">
        {newsIcons.map(({ iconId, iconHref, iconImgSrc }) => (
          <a
            key={ iconId }
            href={ iconHref }
            target="_blank"
            rel="noreferrer"
          >
            <img src={ iconImgSrc } alt="Logo do Jornal" />
          </a>
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
