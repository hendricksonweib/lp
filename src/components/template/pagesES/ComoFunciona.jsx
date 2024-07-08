import React from 'react'
import FlexRow from '../../layout/FlexRow'
import Flex from '../../layout/Flex'
import screenImg from '../../../assets/inforScreensES.svg'
import DarkButton from '../../controls/DarkButton'

import '../../../style/global.css'

function ComoFunciona() {
    return (
        <section className='ComoFunciona-conteiner'>
            <FlexRow item={"center"} gaps={"50px"}>
                <img src={screenImg} alt="imagem.svg" />
                <Flex item={"start"} gaps={'12px'}>
                <h1 className="TituloQuem" >Sigue el ejemplo de los principales creadores de contenido y reutiliza tus videos largos de manera eficaz.</h1>
                <DarkButton cta={"¡Quiero inscribirme ahora!"}/>
                </Flex>
            </FlexRow>
        </section>
    )
}

export default ComoFunciona