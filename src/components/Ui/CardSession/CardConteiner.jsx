import React from 'react';
import Card from './Card';
import Flex from '../../layout/Flex';
import './CardContainer.css';

const cardsData = [
    { title: "Entrevista - NEon - JPB1", link: "https://globoplay.globo.com/v/12655812/" },
    { title: "Entrevista - JMTV 2ª Edição - Entrevista sobre Inteligência Artificial", link: "https://globoplay.globo.com/v/12635695/" },
    { title: "Entrevista - Que negócio é Esse - SEBRAE MA - TV Mirante", link: "https://globoplay.globo.com/v/12629093/" },
    { title: "Entrevista Edu Castanho Podcast", link: "https://www.youtube.com/watch?v=gae_JYDEQKU&t=1884s" },
    { title: "Exame - Destaque em Aceleração empreendedora", link: "https://exame.com/negocios/conheca-as-6-startups-nordestinas-escolhidas-para-receber-investimentos-de-programa-de-aceleracao/" },
    { title: "G1 - Participação no NEon", link: "https://g1.globo.com/ma/maranhao/noticia/2024/06/06/aduela-media-capital-empresa-do-grupo-mirante-participa-do-maior-evento-de-startups-do-nordeste.ghtml" },
    { title: "Terra - IAs destaque para Marketing", link: "https://www.terra.com.br/economia/5-startups-de-ia-que-estao-mudando-o-mercado-da-comunicacao,bede2625ebaa65c41df8db80502506a6wr5fo7nb.html" },
    { title: "Mundo do Marketing - 5 Dicas de Reposicionamento de Conteúdo", link: "https://www.mundodomarketing.com.br/5-dicas-de-reposicionamento-de-conteudo-para-impulsionar-a-estrategia-digital/" },
];

const CardContainer = () => {
    return (
        <>
            <aside className="blog-conteiner">
                <h4>Autoclipper na midia</h4>
                <hr className="custom-hr" />
                <div className="card-container">
                    {cardsData.map((card, index) => (
                        <Card key={index} title={card.title} link={card.link} />
                    ))}
                </div>
            </aside>
        </>
    );
};

export default CardContainer;
