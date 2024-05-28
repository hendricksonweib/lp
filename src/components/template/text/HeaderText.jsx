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
                <H3 Subtitle='Aumente seu engajamento e viralize no YouTube Shorts,
Instagram Reels e TikTok.' fontWeight="500" />
                <H1 Title='Crie vídeos 10X mais rápido com nossa IA!' color='white' />
                <H3 Subtitle='Utilize Inteligência Artificial e crie cortes de conteúdo
automatizados!' fontWeight="400" />
                <PrimaryButton Cta='Quero ser notificado' />
            </Flex>
        </div>
    )
}

export default HeaderText