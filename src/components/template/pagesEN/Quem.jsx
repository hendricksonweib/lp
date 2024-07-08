import React from 'react'
import '../../../style/global.css'
import FlexRow from '../../layout/FlexRow'
import Flex from '../../layout/Flex'
import Icon from '../../layout/Icon'

function Quem() {
    return (
        <section className='Quem-conteiner'>
            <Flex item={'center'} gaps={'0px'}>
            <h1 className="TituloComo" >Who is Autoclipper for?</h1>
                <Icon
                    item1={'Cut Channels'}
                    item2={'Podcast Studios'}
                    item3={'Content Creators'}
                    item4={'Marketing Agencies'}
                />
            </Flex>
        </section>
    )
}

export default Quem