import React from 'react'
import '../../style/global.css'
import Li from '../controls/Li'
import Flex from '../layout/Flex'
import Icon1 from '../../assets/Icons/icon1.svg'
import Icon2 from '../../assets/Icons/icon2.svg'
import Icon3 from '../../assets/Icons/icon3.svg'

function List() {
    return (
        <ul className='List-conteiner'>
            <Flex item={'start'} gaps={'6px'}>
                <Li img={Icon1} text={'Descreva o objetivo do seu conteúdo e receba recomendações personalizadas da nossa IA!'} />
                <Li img={Icon2} text={'Faça edição, reformatação, estilização e edição de legendas em um editor simpflificado!'} />
                <Li img={Icon3} text={'Utilize as nossas sugestões de títulos para compartilhar os vídeos nas redes sociais!'} />
            </Flex>
        </ul>
    )
}

export default List