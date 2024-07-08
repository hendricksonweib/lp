import React from 'react'
import '../../../style/global.css'
import FlexRow from '../../layout/FlexRow'
import Flex from '../../layout/Flex'
import Icon from '../../layout/Icon'

function Quem() {
    return (
        <section className='Quem-conteiner'>
            <Flex item={'center'} gaps={'0px'}>
                <h1 className="TituloComo" >¿Para quién es Autoclipper?</h1>
                <Icon
                    item1={'Canales cortados'}
                    item2={'Estudios de podcast'}
                    item3={'Creadores de contenido'}
                    item4={'Agencias de marketing'}
                />
            </Flex>
        </section>
    )
}

export default Quem