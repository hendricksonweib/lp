import React from 'react'
import FlexRow from '../../layout/FlexRow'
import Flex from '../../layout/Flex'
import screenImg from '../../../assets/inforScreens.svg'
import DarkButton from '../../controls/DarkButton'

import '../../../style/global.css'

function ComoFunciona() {
    return (
        <section className='ComoFunciona-conteiner'>
            <FlexRow item={"center"} gaps={"50px"}>
                <img src={screenImg} alt="imagem.svg" />
                <Flex item={"start"} gaps={'12px'}>
                    <h1 className="TituloQuem" >Faça como os principais produtores de conteúdo e reutilize seus vídeos longos de forma eficaz</h1>
                    <DarkButton cta={"Quero me inscrever agora!"} />
                </Flex>
            </FlexRow>
        </section>
    )
}

export default ComoFunciona