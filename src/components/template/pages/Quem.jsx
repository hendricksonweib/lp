import React from 'react'
import '../../../style/global.css'
import FlexRow from '../../layout/FlexRow'
import Flex from '../../layout/Flex'
import Icon from '../../layout/Icon'

function Quem() {
    return (
        <section className='Quem-conteiner'>
            <Flex item={'center'} gaps={'0px'}>
                <h2 className='h2-title'>
                    Para Quem é a Autoclipper?
                </h2>
               <Icon/>
            </Flex>
        </section>
    )
}

export default Quem