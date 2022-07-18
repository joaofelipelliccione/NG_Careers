import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logoGlobo from '../assets/logo_globo.svg';
import logoForbes from '../assets/logo_forbes.svg';
import logoEstadao from '../assets/logo_estadao.svg';
import logoFolhaSP from '../assets/logo_folhaSP.svg';
import logoIstoE from '../assets/logo_istoE.svg';
import logoUol from '../assets/logo_uol.svg';
import newsBillboard from '../assets/news_billboard.svg';
import '../styles/newsSection.css';

const newsIcons = [
  { iconId: 1, iconImgSrc: logoGlobo, iconHref: 'https://oglobo.globo.com/clube-o-globo/servicos/oferta/ngcash-assine-e-ganhe.ghtml' },
  { iconId: 2, iconImgSrc: logoForbes, iconHref: 'https://forbes.com.br/forbes-money/2021/06/segmentacao-de-fintechs-conheca-4-bancos-digitais-criados-para-publicos-especificos/#foto4' },
  { iconId: 3, iconImgSrc: logoEstadao, iconHref: 'https://einvestidor.estadao.com.br/mercado/banco-neaglebank-youtubers-criancas/' },
  { iconId: 4, iconImgSrc: logoFolhaSP, iconHref: 'https://www1.folha.uol.com.br/mpme/2021/05/empresas-lancam-aplicativos-de-mesada-digital-e-cartao-de-credito-para-criancas.shtml' },
  { iconId: 5, iconImgSrc: logoIstoE, iconHref: 'https://www.istoedinheiro.com.br/tem-fintech-ate-para-criancas-e-adolescentes/' },
  { iconId: 6, iconImgSrc: logoUol, iconHref: 'https://economia.uol.com.br/mais/ultimas-noticias/2021/01/27/fintechs-bancos-digitais-para-criancas-adolescentes.htm' },
];

function NewsSection() {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

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
            <img
              src={ iconImgSrc }
              alt="Logo do Jornal"
              className={ isMobileDevice ? 'newsIconsMobile' : 'newsIconsDesktop' }
            />
          </a>
        ))}
      </div>
      <img src={ newsBillboard } alt="Letreiro" className="newsBillboard" />
    </section>
  );
}

export default NewsSection;
