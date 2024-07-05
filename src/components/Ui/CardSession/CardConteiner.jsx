import React from 'react';
import Card from './Card';
import JPB1 from '../../../assets/Blog/JPB1.svg'
import JMTV2 from '../../../assets/Blog/JMTV2.svg'
import QNE from '../../../assets/Blog/QNE.svg'
import EDC from '../../../assets/Blog/EDC.svg'
import Exame from '../../../assets/Blog/Exame.svg'
import G1 from '../../../assets/Blog/G1.svg'
import Terra from '../../../assets/Blog/Terra.svg'
import MM from '../../../assets/Blog/MM.svg'


import './CardContainer.css';


const cardsData = [
    { title: "Entrevista - NEon - JPB1", link: "https://globoplay.globo.com/v/12655812/", image: JPB1 },
    { title: "Entrevista - JMTV 2ª Edição - Entrevista sobre Inteligência Artificial", link: "https://globoplay.globo.com/v/12635695/", image: JMTV2 },
    { title: "Entrevista - Que negócio é Esse - SEBRAE MA - TV Mirante", link: "https://globoplay.globo.com/v/12629093/", image: QNE },
    { title: "Entrevista Edu Castanho Podcast", link: "https://www.youtube.com/watch?v=gae_JYDEQKU&t=1884s", image: EDC},
    { title: "Exame - Destaque em Aceleração empreendedora", link: "https://exame.com/negocios/conheca-as-6-startups-nordestinas-escolhidas-para-receber-investimentos-de-programa-de-aceleracao/", image: Exame},
    { title: "G1 - Participação no NEon", link: "https://g1.globo.com/ma/maranhao/noticia/2024/06/06/aduela-media-capital-empresa-do-grupo-mirante-participa-do-maior-evento-de-startups-do-nordeste.ghtml", image: G1 },
    { title: "Terra - IAs destaque para Marketing", link: "https://www.terra.com.br/economia/5-startups-de-ia-que-estao-mudando-o-mercado-da-comunicacao,bede2625ebaa65c41df8db80502506a6wr5fo7nb.html", image: Terra },
    { title: "Mundo do Marketing - 5 Dicas de Reposicionamento de Conteúdo", link: "https://www.mundodomarketing.com.br/5-dicas-de-reposicionamento-de-conteudo-para-impulsionar-a-estrategia-digital/", image: MM },
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
