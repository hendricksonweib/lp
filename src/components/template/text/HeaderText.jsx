import React from 'react'
import '../../../style/global.css'
import Flex from '../../layout/Flex'
import H1 from '../../layout/H1-title'
import H3 from '../../layout/H3-subtitle'
import PrimaryButton from '../../controls/PrimaryButton'


function HeaderText() {
    return (
        <div className="text-header">
            <Flex item={'start'} gaps={'12px'}>
                <H3 Subtitle='Que tal criar vídeos virais mais rápido?' fontWeight="500" />
                <H1 Title='Crie cortes de conteúdo até 10X mais rápido!' color='white' />
                <H3 Subtitle='Utilize Inteligência Artificial e crie cortes de conteúdo
automatizados!' fontWeight="400" />
                <PrimaryButton Cta='Faça parte do Alpha!' />
            </Flex>
        </div>
    )
}

export default HeaderText