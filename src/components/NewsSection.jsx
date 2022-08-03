import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logoForbes from '../assets/logo_forbes.png';
// import logoBloomberg from '../assets/logo_bloomberg.png';
import logoValor from '../assets/logo_valor.png';
import logoGlobo from '../assets/logo_globo.png';
import logoExame from '../assets/logo_exame.png';
import logoEstadao from '../assets/logo_estadao.png';
// import logoInfomoney from '../assets/logo_infomoney.png';
import logoNeofeed from '../assets/logo_neofeed.png';
import newsBillboard from '../assets/news_billboard.png';
import '../styles/newsSection.css';

const newsIcons = [
  { iconId: 1, iconImgSrc: logoForbes, iconHref: 'https://forbes.com.br/forbes-money/2022/08/fintech-ng-cash-recebe-aporte-historico-de-us-10-milhoes/' },
  // { iconId: 2, iconImgSrc: logoBloomberg, iconHref: '' },
  { iconId: 3, iconImgSrc: logoValor, iconHref: 'https://pipelinevalor.globo.com/startups/noticia/banco-da-new-generation-ngcash-capta-us-10-milhoes-com-a16z-e-monashees.ghtml' },
  { iconId: 4, iconImgSrc: logoGlobo, iconHref: 'https://oglobo.globo.com/blogs/capital/post/2022/08/conta-digital-para-adolescentes-fundada-na-puc-rio-recebe-aporte-de-us-10-milhoes.ghtml' },
  { iconId: 5, iconImgSrc: logoExame, iconHref: 'https://exame.com/negocios/ng-cash-app-financeiro-geracao-z-aporte-10-milhoes/' },
  { iconId: 6, iconImgSrc: logoEstadao, iconHref: 'https://link.estadao.com.br/noticias/inovacao,fintech-ngcash-recebe-us-10-milhoes-para-ser-o-banco-da-geracao-z,70004125001' },
  // { iconId: 7, iconImgSrc: logoInfomoney, iconHref: '' },
  { iconId: 8, iconImgSrc: logoNeofeed, iconHref: 'https://neofeed.com.br/blog/home/aposta-da-stone-ng-cash-capta-seed-de-us-10-milhoes-com-a16z-e-monashees/' },
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
