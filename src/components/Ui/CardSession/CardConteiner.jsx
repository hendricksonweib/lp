import React from 'react';
import Card from './Card';
import globoimg from "../../../assets/Blog/globoplay.png";
import jmtvimg from "../../../assets/Blog/jmtv.png";
import qneimg from "../../../assets/Blog/qne.png";
import Edimg from "../../../assets/Blog/EdCastanho.png";
import exame from "../../../assets/Blog/exame.png";
import neon from "../../../assets/Blog/neon.png";
import terras from "../../../assets/Blog/terras.png";
import mundomarketing from "../../../assets/Blog/mundomarketing.png";
import './CardContainer.css';


const cardsData = [
    { title: "Entrevista - NEon - JPB1", link: "https://globoplay.globo.com/v/12655812/", image: globoimg },
    { title: "Entrevista - JMTV 2ª Edição - Entrevista sobre Inteligência Artificial", link: "https://globoplay.globo.com/v/12635695/", image: jmtvimg },
    { title: "Entrevista - Que negócio é Esse - SEBRAE MA - TV Mirante", link: "https://globoplay.globo.com/v/12629093/", image: qneimg },
    { title: "Entrevista Edu Castanho Podcast", link: "https://www.youtube.com/watch?v=gae_JYDEQKU&t=1884s", image: Edimg},
    { title: "Exame - Destaque em Aceleração empreendedora", link: "https://exame.com/negocios/conheca-as-6-startups-nordestinas-escolhidas-para-receber-investimentos-de-programa-de-aceleracao/", image: exame},
    { title: "G1 - Participação no NEon", link: "https://g1.globo.com/ma/maranhao/noticia/2024/06/06/aduela-media-capital-empresa-do-grupo-mirante-participa-do-maior-evento-de-startups-do-nordeste.ghtml", image: neon },
    { title: "Terra - IAs destaque para Marketing", link: "https://www.terra.com.br/economia/5-startups-de-ia-que-estao-mudando-o-mercado-da-comunicacao,bede2625ebaa65c41df8db80502506a6wr5fo7nb.html", image: terras },
    { title: "Mundo do Marketing - 5 Dicas de Reposicionamento de Conteúdo", link: "https://www.mundodomarketing.com.br/5-dicas-de-reposicionamento-de-conteudo-para-impulsionar-a-estrategia-digital/", image: mundomarketing },
];

const CardContainer = () => {
    return (
        <aside className="blog-conteiner">
            <div className="main-blog">
                <h4>Autoclipper na mídia</h4>
                <hr className="custom-hr" />
                <div className="card-container">
                    {cardsData.map((card, index) => (
                        <Card key={index} title={card.title} link={card.link} image={card.image} />
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default CardContainer;
