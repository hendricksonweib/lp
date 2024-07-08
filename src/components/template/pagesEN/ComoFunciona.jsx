import React from 'react'
import FlexRow from '../../layout/FlexRow'
import Flex from '../../layout/Flex'
import screenImg from '../../../assets/inforScreensEN.svg'
import DarkButton from '../../controls/DarkButton'

import '../../../style/global.css'

function ComoFunciona() {
    return (
        <section className='ComoFunciona-conteiner'>
            <FlexRow item={"center"} gaps={"50px"}>
                <img src={screenImg} alt="imagem.svg" />
                <Flex item={"start"} gaps={'12px'}>
                    <h1 className="TituloQuem" >Follow the lead of top content creators and effectively repurpose your long videos.</h1>
                    <DarkButton cta={"I want to sign up now!"}/>
                </Flex>
            </FlexRow>
        </section>
    )
}

export default ComoFunciona