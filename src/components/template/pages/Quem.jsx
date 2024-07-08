import React from 'react'
import '../../../style/global.css'
import FlexRow from '../../layout/FlexRow'
import Flex from '../../layout/Flex'
import Icon from '../../layout/Icon'

function Quem() {
    return (
        <section className='Quem-conteiner'>
            <Flex item={'center'} gaps={'0px'}>
            <h1 className="TituloComo" >Para Quem é a Autoclipper?</h1>
                <Icon
                    item1={'Canais de Corte'}
                    item2={'Estúdios de Podcast'}
                    item3={'Criadores de Conteúdo'}
                    item4={'Agências de Marketing'}
                />
            </Flex>
        </section>
    )
}

export default Quem