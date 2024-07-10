import React from 'react'
import Flex from '../layout/Flex'

import "../../style/global.css"

function CardDepoiments({ link, Name, Empresa }) {
    return (
        <div className='cardDepoimento-conteiner'>
            <Flex item={"start"} gaps={"0.5rem"}>
            <iframe className='video'
                width="228"
                height="404"
                src={link}
                title="video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <Flex item={"start"}>
            <h1 className='h1-depoimento'>{Name}</h1>
            <h2 className='h2-depoimento'>{Empresa}</h2>
            </Flex>
            </Flex>
        </div>
    )
}

export default CardDepoiments