import React from 'react'
import Flex from '../../layout/Flex'
import DarkButton from '../../controls/DarkButton'
function OqueText() {
    return (
        <section className='Conteiner-OqueText'>
            <Flex item={'start'} gaps={'20px'} >
                <h2 className='h2-title'>Cresça com a estratégia
                    de conteúdo dos maiores
                    produtores de conteúdo!</h2>
                    <DarkButton cta={"Quero ser notificado!"}/>
            </Flex>
        </section>
    )
}

export default OqueText